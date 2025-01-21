// This For Delete Reservition in Current Clients
function DeleteAlert(){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
        customClass: {
          popup: "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg",
          title: "text-xl font-bold",
          content: "text-sm",
          confirmButton: "bg-blue-600 mr-2 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded",
          cancelButton: "bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300 dark:focus:ring-red-800"
        },
        buttonsStyling: false
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            customClass: {
              popup: "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg",
              title: "text-xl font-bold",
              content: "text-sm",
              confirmButton: "bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
            },
            buttonsStyling: false
          });
        }
      });
}

// This to Show Details in Manage Clients
function ShowDetails(){
    Swal.fire({
        title: '<h3 class="text-lg font-semibold">Client Details<h3/>',
        html: `
            <h4 class="mt-2">Phone : 010 102 345 67<h4/>
            <h4 class="mt-2">Job : React Developer<h4/>
        `,
        customClass: {
            popup: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100', // Tailwind dark mode classes
            title: 'text-lg font-semibold', // Tailwind classes for title
            htmlContainer: 'text-left space-y-2', // Tailwind classes for content
            confirmButton: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 rounded dark:hover:bg-blue-700 text-white w-24 h-10', // Tailwind classes for button
        },
        buttonsStyling: false, // Disable SweetAlert2 default button styles
    });
}





// This For CheckOut
function CheckoutAlert(){    
    Swal.fire({
        title: '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Checkout</h3>',
            html: `
                <div class="flex flex-col gap-4">
                    <!-- Client Name -->
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Client Name:</h3>
                        <span class="text-gray-700 dark:text-gray-300">John Doe</span>
                    </div>
                    <!-- Client ID -->
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Client ID:</h3>
                        <span class="text-gray-700 dark:text-gray-300">#12345</span>
                    </div>
                    <!-- Start At -->
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Start At:</h3>
                        <span class="text-gray-700 dark:text-gray-300">12:00 PM</span>
                    </div>
                    <!-- End At -->
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">End At:</h3>
                        <span class="text-gray-700 dark:text-gray-300">02:00 PM</span>
                    </div>
                    <!-- End At -->
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Time:</h3>
                        <span class="text-gray-700 dark:text-gray-300">3Hours</span>
                    </div>
                    <!-- Price -->
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Price:</h3>
                        <input type="text" value="100L.E" readonly class="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-right w-1/2 focus:outline-none">
                    </div>
                    <!-- Amount Paid -->
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Amount Paid:</h3>
                        <input 
                            id="amountPaid" 
                            type="number" 
                            placeholder="Enter amount" 
                            class="bg-gray-50 dark:bg-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-right w-1/2 focus:ring-2 focus:ring-blue-500"
                            onchange="calculateRemainingAmount()"
                        >
                    </div>
                    <!-- Discount -->
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Discount:</h3>
                        <input 
                            id="discount" 
                            type="number" 
                            placeholder="Enter discount" 
                            class="bg-gray-50 dark:bg-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-right w-1/2 focus:ring-2 focus:ring-blue-500"
                            onchange="calculateRemainingAmount()"
                        >
                    </div>
                    <!-- Remaining Amount -->
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Remaining Amount:</h3>
                        <input 
                            id="remainingAmount" 
                            type="text" 
                            readonly 
                            class="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-right w-1/2 focus:outline-none"
                        >
                    </div>
                    <!-- Payment Method -->
                    <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Payment Method:</h3>
                        <select id="paymentMethod" class="bg-gray-50 dark:bg-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 w-1/2 focus:ring-2 focus:ring-blue-500">
                            <option value="Cash">Cash</option>
                            <option value="InstaPay">InstaPay</option>
                            <option value="VF-Cash">VF-Cash</option>
                        </select>
                    </div>
                </div>
            `,
        showCancelButton: true,
        confirmButtonText: "Checkout",
        cancelButtonText: "Cancel",
        customClass: {
          popup: "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg",
          title: "text-xl font-bold",
          content: "text-sm",
          confirmButton: "bg-blue-600 mr-2 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded",
          cancelButton: "bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300 dark:focus:ring-red-800"
        },
        buttonsStyling: false
      });
}


function EditClient(){
    Swal.fire({
        title: '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Edit Client Details</h3>',
            html: `
                <form class="max-w-sm mx-auto">
                <div class="mb-5">
                    <input type="text" id="clientName" class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Name">
                    <input type="Number" id="phoneNumber" class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Number">
                    <input type="text" id="clientJob" class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Job/Faculty">
                </form>
            `,
        showCancelButton: true,
        confirmButtonText: "Change!!",
        cancelButtonText: "Cancel",
        customClass: {
          popup: "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg",
          title: "text-xl font-bold",
          content: "text-sm",
          confirmButton: "bg-blue-600 mr-2 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded",
          cancelButton: "bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300 dark:focus:ring-red-800"
        },
        buttonsStyling: false
      });
}