import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [
      {
        id: "1",
        name: "John Doe",
        email: "john@test.com",
      },
      {
        id: "2",
        name: "Jane Doe",
        email: "jane@test.com",
      },
      {
        id: "3",
        name: "John Smith",
        email: "johnSmith@test.com",
      },
    ],
  },
  reducers: {},
});

export default usersSlice.reducer;
