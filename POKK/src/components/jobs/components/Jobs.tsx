import NavBar from "../../navbar/component/NavBar";

const Jobs = () => {

  const jobs = [{
    Job_Id: 1,
    Company_Name: "PTC",
    Due_Date: "1/1/1",
    location: "Pune",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tempora, eveniet omnis error id"
  },
  {
    Job_Id: 2,
    Company_Name: "PTC",
    Due_Date: "1/1/1",
    location: "Pune",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tempora, eveniet omnis error id"
  },
  {
    Job_Id: 3,
    Company_Name: "PTC",
    Due_Date: "1/1/1",
    location: "Pune",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tempora, eveniet omnis error id"

  },
  {
    Job_Id: 4,
    Company_Name: "PTC",
    Due_Date: "1/1/1",
    location: "Pune",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tempora, eveniet omnis error id"

  },
  {
    Job_Id: 5,
    Company_Name: "PTC",
    Due_Date: "1/1/1",
    location: "Pune",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tempora, eveniet omnis error id"

  }];

  return (
    <>
      <NavBar />
      <div className="m-12">
        <div className="mx-5 py-3 font-semibold">
          <h1>Recent Job Openings</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 m5 p-5 justify-items-center">
          {jobs.map((job) => {
            return (
              <div className="m-2 p-5 w-80 rounded-xl bg-gray-100">
                <div className="flex p-2 items-center justify-between">
                  <div className="text-2xl font-semibold">
                    {job.Company_Name}
                  </div>
                  <div>
                    {job.Due_Date}
                  </div>
                </div>
                <div className="p-2 font-medium">
                  {job.location}
                </div>
                <div className="p-2 font-light">
                  {job.description}
                </div>
                <div className="flex p-2 items-center justify-between">
                  <div>
                    <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Apply
                    </button>
                  </div>
                  <div>
                    <button type="button" className="text-black border-2 hover:border-green-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default Jobs;