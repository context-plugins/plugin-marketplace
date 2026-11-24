from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.purchases_destinations_create_error import (
    PurchasesDestinationsCreateErrorBody,
    purchases_destinations_create_error_mapper,
)
from ..errors.purchases_destinations_destroy_error import (
    PurchasesDestinationsDestroyErrorBody,
    purchases_destinations_destroy_error_mapper,
)
from ..errors.purchases_destinations_index_error import (
    PurchasesDestinationsIndexErrorBody,
    purchases_destinations_index_error_mapper,
)
from ..errors.purchases_destinations_update_error import (
    PurchasesDestinationsUpdateErrorBody,
    purchases_destinations_update_error_mapper,
)
from ..models.api_v1_purchases_destinations_request import (
    ApiV1PurchasesDestinationsRequest,
    ApiV1PurchasesDestinationsRequestDict,
)
from ..models.api_v1_purchases_destinations_request1 import (
    ApiV1PurchasesDestinationsRequest1,
    ApiV1PurchasesDestinationsRequest1Dict,
)
from ..models.api_v1_purchases_destinations_response import ApiV1PurchasesDestinationsResponse
from ..models.api_v1_purchases_destinations_response1 import ApiV1PurchasesDestinationsResponse1
from ..models.api_v1_purchases_destinations_response2 import ApiV1PurchasesDestinationsResponse2
from ..server.server import Server


class InboundDestinations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InboundDestinationsWithRawResponse(client, server, auth)

    def purchases_destinations_create(
        self,
        purchase_id: str,
        body: ApiV1PurchasesDestinationsRequest | ApiV1PurchasesDestinationsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PurchasesDestinationsResponse1:
        """Add a new inbound destination for a DID number.

        **Destination Types:**
        - SIP addresses (e.g., ``sip:user@domain.com``)
        - Phone numbers (e.g., ``18005551234``)
        - Extensions (SIP accounts created within didlogic)

        **Parameters:**
        - ``destination`` - The forwarding target (SIP URI or phone number)
        - ``dialing_type`` - Dialing mode: ``sequence``, ``ring_all`` or ``random``
        - ``callhunt`` - Legacy two-state mirror of ``dialing_type`` (boolean); ignored when ``dialing_type`` is sent
        - ``active`` - Enable/disable this destination (boolean)
        - ``transport`` - Transport type code (1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone,
        12 = WebSocket)

        ``transport: 12`` streams the call to a WebSocket endpoint of your own instead of ringing a phone or a SIP
        device, and ``destination`` is then its public ``wss://`` URL. It is available only to accounts enabled for
        voice streaming; any other account is refused with ``422``. The endpoint has to speak our protocol — see
        WebSocket Calls.

        ``did_destination.id`` feeds purchases_destinations_update and purchases_destinations_destroy as ``id``. Rows:
        purchases_destinations_index.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully creates destination and returns destination details

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the DID phone number nor its inventory id matches a
                DID you own. Returns 422 error with validation messages when destination is incorrect ``error`` is
                ``ApiV1PurchasesDestinations403Error1 | Error | RawError``."""
        return unwrap(
            self._with_raw_response.purchases_destinations_create(purchase_id, body, request_options=request_options)
        )

    def purchases_destinations_destroy(
        self, purchase_id: str, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete an existing inbound destination from a DID number.

        **Important:**
        - Destination is permanently removed from the DID configuration
        - Deletion is logged for audit purposes

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            id_: Destination id from purchases_destinations_index, purchases_destinations_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deletes destination and returns 204 No Content

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the DID phone number nor its inventory id matches a
                DID you own. ``error`` is ``ApiV1PurchasesDestinations403Error1 | ApiV1PurchasesDestinationsResponse31 |
                RawError``."""
        return unwrap(
            self._with_raw_response.purchases_destinations_destroy(purchase_id, id_, request_options=request_options)
        )

    def purchases_destinations_index(
        self, purchase_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1PurchasesDestinationsResponse:
        """Retrieve the list of inbound destinations configured for a specific DID number.

        **Destinations** define where incoming calls to a DID should be routed (SIP addresses, phone numbers, etc.).

        **Features:**
        - Returns only current (non-deleted) destinations
        - Each destination includes active status and its dialing mode (``dialing_type``, with the legacy ``callhunt``
            mirror)

        ``destination[].id`` feeds purchases_destinations_update and purchases_destinations_destroy as ``id``.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns all current destinations for the specified DID

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the DID phone number nor its inventory id matches a
                DID you own. ``error`` is ``ApiV1PurchasesDestinations403Error1 | Error | RawError``."""
        return unwrap(
            self._with_raw_response.purchases_destinations_index(purchase_id, request_options=request_options)
        )

    def purchases_destinations_update(
        self,
        purchase_id: str,
        id_: int,
        body: ApiV1PurchasesDestinationsRequest1 | ApiV1PurchasesDestinationsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1PurchasesDestinationsResponse2:
        """Update an existing inbound destination for a DID number.

        **Updatable Fields:**
        - ``dialing_type`` - Dialing mode: ``sequence``, ``ring_all`` or ``random``
        - ``callhunt`` - Legacy two-state mirror of ``dialing_type``; ignored when ``dialing_type`` is sent
        - ``active`` - Enable/disable this destination

        **Note:** The destination address and transport protocol cannot be changed. To change these, delete and create a
        new destination.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            id_: Destination id from purchases_destinations_index, purchases_destinations_create
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully updates destination settings and returns updated destination

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the DID phone number nor its inventory id matches a
                DID you own. ``error`` is ``ApiV1PurchasesDestinations403Error1 | ApiV1PurchasesDestinationsResponse31 |
                RawError``."""
        return unwrap(
            self._with_raw_response.purchases_destinations_update(
                purchase_id, id_, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> InboundDestinationsWithRawResponse:
        return self._with_raw_response


class AsyncInboundDestinations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInboundDestinationsWithRawResponse(client, server, auth)

    async def purchases_destinations_create(
        self,
        purchase_id: str,
        body: ApiV1PurchasesDestinationsRequest | ApiV1PurchasesDestinationsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PurchasesDestinationsResponse1:
        """Add a new inbound destination for a DID number.

        **Destination Types:**
        - SIP addresses (e.g., ``sip:user@domain.com``)
        - Phone numbers (e.g., ``18005551234``)
        - Extensions (SIP accounts created within didlogic)

        **Parameters:**
        - ``destination`` - The forwarding target (SIP URI or phone number)
        - ``dialing_type`` - Dialing mode: ``sequence``, ``ring_all`` or ``random``
        - ``callhunt`` - Legacy two-state mirror of ``dialing_type`` (boolean); ignored when ``dialing_type`` is sent
        - ``active`` - Enable/disable this destination (boolean)
        - ``transport`` - Transport type code (1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone,
        12 = WebSocket)

        ``transport: 12`` streams the call to a WebSocket endpoint of your own instead of ringing a phone or a SIP
        device, and ``destination`` is then its public ``wss://`` URL. It is available only to accounts enabled for
        voice streaming; any other account is refused with ``422``. The endpoint has to speak our protocol — see
        WebSocket Calls.

        ``did_destination.id`` feeds purchases_destinations_update and purchases_destinations_destroy as ``id``. Rows:
        purchases_destinations_index.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully creates destination and returns destination details

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the DID phone number nor its inventory id matches a
                DID you own. Returns 422 error with validation messages when destination is incorrect ``error`` is
                ``ApiV1PurchasesDestinations403Error1 | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.purchases_destinations_create(
                purchase_id, body, request_options=request_options
            ),
        )

    async def purchases_destinations_destroy(
        self, purchase_id: str, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete an existing inbound destination from a DID number.

        **Important:**
        - Destination is permanently removed from the DID configuration
        - Deletion is logged for audit purposes

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            id_: Destination id from purchases_destinations_index, purchases_destinations_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deletes destination and returns 204 No Content

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the DID phone number nor its inventory id matches a
                DID you own. ``error`` is ``ApiV1PurchasesDestinations403Error1 | ApiV1PurchasesDestinationsResponse31 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.purchases_destinations_destroy(
                purchase_id, id_, request_options=request_options
            ),
        )

    async def purchases_destinations_index(
        self, purchase_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1PurchasesDestinationsResponse:
        """Retrieve the list of inbound destinations configured for a specific DID number.

        **Destinations** define where incoming calls to a DID should be routed (SIP addresses, phone numbers, etc.).

        **Features:**
        - Returns only current (non-deleted) destinations
        - Each destination includes active status and its dialing mode (``dialing_type``, with the legacy ``callhunt``
            mirror)

        ``destination[].id`` feeds purchases_destinations_update and purchases_destinations_destroy as ``id``.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns all current destinations for the specified DID

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the DID phone number nor its inventory id matches a
                DID you own. ``error`` is ``ApiV1PurchasesDestinations403Error1 | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.purchases_destinations_index(purchase_id, request_options=request_options)
        )

    async def purchases_destinations_update(
        self,
        purchase_id: str,
        id_: int,
        body: ApiV1PurchasesDestinationsRequest1 | ApiV1PurchasesDestinationsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PurchasesDestinationsResponse2:
        """Update an existing inbound destination for a DID number.

        **Updatable Fields:**
        - ``dialing_type`` - Dialing mode: ``sequence``, ``ring_all`` or ``random``
        - ``callhunt`` - Legacy two-state mirror of ``dialing_type``; ignored when ``dialing_type`` is sent
        - ``active`` - Enable/disable this destination

        **Note:** The destination address and transport protocol cannot be changed. To change these, delete and create a
        new destination.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            id_: Destination id from purchases_destinations_index, purchases_destinations_create
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully updates destination settings and returns updated destination

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the DID phone number nor its inventory id matches a
                DID you own. ``error`` is ``ApiV1PurchasesDestinations403Error1 | ApiV1PurchasesDestinationsResponse31 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.purchases_destinations_update(
                purchase_id, id_, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInboundDestinationsWithRawResponse:
        return self._with_raw_response


class InboundDestinationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def purchases_destinations_create(
        self,
        purchase_id: str,
        body: ApiV1PurchasesDestinationsRequest | ApiV1PurchasesDestinationsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PurchasesDestinationsResponse1, PurchasesDestinationsCreateErrorBody]:
        """Add a new inbound destination for a DID number.

        **Destination Types:**
        - SIP addresses (e.g., ``sip:user@domain.com``)
        - Phone numbers (e.g., ``18005551234``)
        - Extensions (SIP accounts created within didlogic)

        **Parameters:**
        - ``destination`` - The forwarding target (SIP URI or phone number)
        - ``dialing_type`` - Dialing mode: ``sequence``, ``ring_all`` or ``random``
        - ``callhunt`` - Legacy two-state mirror of ``dialing_type`` (boolean); ignored when ``dialing_type`` is sent
        - ``active`` - Enable/disable this destination (boolean)
        - ``transport`` - Transport type code (1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone,
        12 = WebSocket)

        ``transport: 12`` streams the call to a WebSocket endpoint of your own instead of ringing a phone or a SIP
        device, and ``destination`` is then its public ``wss://`` URL. It is available only to accounts enabled for
        voice streaming; any other account is refused with ``422``. The endpoint has to speak our protocol — see
        WebSocket Calls.

        ``did_destination.id`` feeds purchases_destinations_update and purchases_destinations_destroy as ``id``. Rows:
        purchases_destinations_index.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/purchases/{purchase_id}/destinations"),
            path_params=[param[str]("purchase_id", purchase_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PurchasesDestinationsRequest | ApiV1PurchasesDestinationsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PurchasesDestinationsResponse1],
            error_mapper=purchases_destinations_create_error_mapper,
            request_options=request_options,
        )

    def purchases_destinations_destroy(
        self, purchase_id: str, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PurchasesDestinationsDestroyErrorBody]:
        """Delete an existing inbound destination from a DID number.

        **Important:**
        - Destination is permanently removed from the DID configuration
        - Deletion is logged for audit purposes

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            id_: Destination id from purchases_destinations_index, purchases_destinations_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/purchases/{purchase_id}/destinations/{id}"),
            path_params=[param[str]("purchase_id", purchase_id), param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=purchases_destinations_destroy_error_mapper,
            request_options=request_options,
        )

    def purchases_destinations_index(
        self, purchase_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PurchasesDestinationsResponse, PurchasesDestinationsIndexErrorBody]:
        """Retrieve the list of inbound destinations configured for a specific DID number.

        **Destinations** define where incoming calls to a DID should be routed (SIP addresses, phone numbers, etc.).

        **Features:**
        - Returns only current (non-deleted) destinations
        - Each destination includes active status and its dialing mode (``dialing_type``, with the legacy ``callhunt``
            mirror)

        ``destination[].id`` feeds purchases_destinations_update and purchases_destinations_destroy as ``id``.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/purchases/{purchase_id}/destinations"),
            path_params=[param[str]("purchase_id", purchase_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PurchasesDestinationsResponse],
            error_mapper=purchases_destinations_index_error_mapper,
            request_options=request_options,
        )

    def purchases_destinations_update(
        self,
        purchase_id: str,
        id_: int,
        body: ApiV1PurchasesDestinationsRequest1 | ApiV1PurchasesDestinationsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PurchasesDestinationsResponse2, PurchasesDestinationsUpdateErrorBody]:
        """Update an existing inbound destination for a DID number.

        **Updatable Fields:**
        - ``dialing_type`` - Dialing mode: ``sequence``, ``ring_all`` or ``random``
        - ``callhunt`` - Legacy two-state mirror of ``dialing_type``; ignored when ``dialing_type`` is sent
        - ``active`` - Enable/disable this destination

        **Note:** The destination address and transport protocol cannot be changed. To change these, delete and create a
        new destination.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            id_: Destination id from purchases_destinations_index, purchases_destinations_create
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/purchases/{purchase_id}/destinations/{id}"),
            path_params=[param[str]("purchase_id", purchase_id), param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PurchasesDestinationsRequest1 | ApiV1PurchasesDestinationsRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PurchasesDestinationsResponse2],
            error_mapper=purchases_destinations_update_error_mapper,
            request_options=request_options,
        )


class AsyncInboundDestinationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def purchases_destinations_create(
        self,
        purchase_id: str,
        body: ApiV1PurchasesDestinationsRequest | ApiV1PurchasesDestinationsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PurchasesDestinationsResponse1, PurchasesDestinationsCreateErrorBody]:
        """Add a new inbound destination for a DID number.

        **Destination Types:**
        - SIP addresses (e.g., ``sip:user@domain.com``)
        - Phone numbers (e.g., ``18005551234``)
        - Extensions (SIP accounts created within didlogic)

        **Parameters:**
        - ``destination`` - The forwarding target (SIP URI or phone number)
        - ``dialing_type`` - Dialing mode: ``sequence``, ``ring_all`` or ``random``
        - ``callhunt`` - Legacy two-state mirror of ``dialing_type`` (boolean); ignored when ``dialing_type`` is sent
        - ``active`` - Enable/disable this destination (boolean)
        - ``transport`` - Transport type code (1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone,
        12 = WebSocket)

        ``transport: 12`` streams the call to a WebSocket endpoint of your own instead of ringing a phone or a SIP
        device, and ``destination`` is then its public ``wss://`` URL. It is available only to accounts enabled for
        voice streaming; any other account is refused with ``422``. The endpoint has to speak our protocol — see
        WebSocket Calls.

        ``did_destination.id`` feeds purchases_destinations_update and purchases_destinations_destroy as ``id``. Rows:
        purchases_destinations_index.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/purchases/{purchase_id}/destinations"),
            path_params=[param[str]("purchase_id", purchase_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PurchasesDestinationsRequest | ApiV1PurchasesDestinationsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PurchasesDestinationsResponse1],
            error_mapper=purchases_destinations_create_error_mapper,
            request_options=request_options,
        )

    async def purchases_destinations_destroy(
        self, purchase_id: str, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PurchasesDestinationsDestroyErrorBody]:
        """Delete an existing inbound destination from a DID number.

        **Important:**
        - Destination is permanently removed from the DID configuration
        - Deletion is logged for audit purposes

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            id_: Destination id from purchases_destinations_index, purchases_destinations_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/purchases/{purchase_id}/destinations/{id}"),
            path_params=[param[str]("purchase_id", purchase_id), param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=purchases_destinations_destroy_error_mapper,
            request_options=request_options,
        )

    async def purchases_destinations_index(
        self, purchase_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PurchasesDestinationsResponse, PurchasesDestinationsIndexErrorBody]:
        """Retrieve the list of inbound destinations configured for a specific DID number.

        **Destinations** define where incoming calls to a DID should be routed (SIP addresses, phone numbers, etc.).

        **Features:**
        - Returns only current (non-deleted) destinations
        - Each destination includes active status and its dialing mode (``dialing_type``, with the legacy ``callhunt``
            mirror)

        ``destination[].id`` feeds purchases_destinations_update and purchases_destinations_destroy as ``id``.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/purchases/{purchase_id}/destinations"),
            path_params=[param[str]("purchase_id", purchase_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PurchasesDestinationsResponse],
            error_mapper=purchases_destinations_index_error_mapper,
            request_options=request_options,
        )

    async def purchases_destinations_update(
        self,
        purchase_id: str,
        id_: int,
        body: ApiV1PurchasesDestinationsRequest1 | ApiV1PurchasesDestinationsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PurchasesDestinationsResponse2, PurchasesDestinationsUpdateErrorBody]:
        """Update an existing inbound destination for a DID number.

        **Updatable Fields:**
        - ``dialing_type`` - Dialing mode: ``sequence``, ``ring_all`` or ``random``
        - ``callhunt`` - Legacy two-state mirror of ``dialing_type``; ignored when ``dialing_type`` is sent
        - ``active`` - Enable/disable this destination

        **Note:** The destination address and transport protocol cannot be changed. To change these, delete and create a
        new destination.

        Args:
            purchase_id: Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
                ``43800327987``) or the numeric **inventory id** (e.g. ``21869``). Both resolve the same DID.
            id_: Destination id from purchases_destinations_index, purchases_destinations_create
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/purchases/{purchase_id}/destinations/{id}"),
            path_params=[param[str]("purchase_id", purchase_id), param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1PurchasesDestinationsRequest1 | ApiV1PurchasesDestinationsRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PurchasesDestinationsResponse2],
            error_mapper=purchases_destinations_update_error_mapper,
            request_options=request_options,
        )
