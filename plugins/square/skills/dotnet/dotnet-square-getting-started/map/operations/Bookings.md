# Bookings — operations

Accessor: `client.Bookings` · Source: `Api/Bookings.cs` · 13 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BulkRetrieveBookings
- **HTTP**: `POST /v2/bookings/bulk-retrieve` (Default (connect))
- **Notes**: Bulk-Retrieves a list of bookings by booking IDs. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.
- **Signature**: `BulkRetrieveBookings(BulkRetrieveBookingsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkRetrieveBookingsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BulkRetrieveTeamMemberBookingProfiles
- **HTTP**: `POST /v2/bookings/team-member-booking-profiles/bulk-retrieve` (Default (connect))
- **Notes**: Retrieves one or more team members' booking profiles.
- **Signature**: `BulkRetrieveTeamMemberBookingProfiles(BulkRetrieveTeamMemberBookingProfilesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BulkRetrieveTeamMemberBookingProfilesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CancelBooking
- **HTTP**: `POST /v2/bookings/{booking_id}/cancel` (Default (connect))
- **Notes**: Cancels an existing booking. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope. For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus* or *Appointments Premium*.
- **Signature**: `CancelBooking(string bookingId, CancelBookingRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelBookingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateBooking
- **HTTP**: `POST /v2/bookings` (Default (connect))
- **Notes**: Creates a booking. The required input must include the following: - `Booking.location_id` - `Booking.start_at` - `Booking.AppointmentSegment.team_member_id` - `Booking.AppointmentSegment.service_variation_id` - `Booking.AppointmentSegment.service_variation_version` To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope. For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus* or *Appointments Premium*.
- **Signature**: `CreateBooking(CreateBookingRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateBookingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListBookings
- **HTTP**: `GET /v2/bookings` (Default (connect))
- **Notes**: Retrieve a collection of bookings. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.
- **Signature**: `ListBookings(int? limit, string? cursor, string? customerId, string? teamMemberId, string? locationId, string? startAtMin, string? startAtMax, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`limit` … `startAtMax`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`, `customer_id` ← `customerId`, `team_member_id` ← `teamMemberId`, `location_id` ← `locationId`, `start_at_min` ← `startAtMin`, `start_at_max` ← `startAtMax`
- **Returns**: `ListBookingsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListLocationBookingProfiles
- **HTTP**: `GET /v2/bookings/location-booking-profiles` (Default (connect))
- **Notes**: Lists location booking profiles of a seller.
- **Signature**: `ListLocationBookingProfiles(int? limit, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ListLocationBookingProfilesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTeamMemberBookingProfiles
- **HTTP**: `GET /v2/bookings/team-member-booking-profiles` (Default (connect))
- **Notes**: Lists booking profiles for team members.
- **Signature**: `ListTeamMemberBookingProfiles(int? limit, string? cursor, string? locationId, bool? bookableOnly = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - `locationId` — nullable, no default → **must pass explicitly**
  - defaults: `bookableOnly` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `bookable_only` ← `bookableOnly`, `limit` ← `limit`, `cursor` ← `cursor`, `location_id` ← `locationId`
- **Returns**: `ListTeamMemberBookingProfilesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveBooking
- **HTTP**: `GET /v2/bookings/{booking_id}` (Default (connect))
- **Notes**: Retrieves a booking. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.
- **Signature**: `RetrieveBooking(string bookingId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveBookingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveBusinessBookingProfile
- **HTTP**: `GET /v2/bookings/business-booking-profile` (Default (connect))
- **Notes**: Retrieves a seller's booking profile.
- **Signature**: `RetrieveBusinessBookingProfile(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveBusinessBookingProfileResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveLocationBookingProfile
- **HTTP**: `GET /v2/bookings/location-booking-profiles/{location_id}` (Default (connect))
- **Notes**: Retrieves a seller's location booking profile.
- **Signature**: `RetrieveLocationBookingProfile(string locationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveLocationBookingProfileResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveTeamMemberBookingProfile
- **HTTP**: `GET /v2/bookings/team-member-booking-profiles/{team_member_id}` (Default (connect))
- **Notes**: Retrieves a team member's booking profile.
- **Signature**: `RetrieveTeamMemberBookingProfile(string teamMemberId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveTeamMemberBookingProfileResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchAvailability
- **HTTP**: `POST /v2/bookings/availability/search` (Default (connect))
- **Notes**: Searches for availabilities for booking. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.
- **Signature**: `SearchAvailability(SearchAvailabilityRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchAvailabilityResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateBooking
- **HTTP**: `PUT /v2/bookings/{booking_id}` (Default (connect))
- **Notes**: Updates a booking. To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope. To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope. For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus* or *Appointments Premium*.
- **Signature**: `UpdateBooking(string bookingId, UpdateBookingRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateBookingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
