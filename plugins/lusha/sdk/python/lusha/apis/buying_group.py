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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_contacts_buying_group_error import (
    GetContactsBuyingGroupErrorBody,
    get_contacts_buying_group_error_mapper,
)
from ..models.v3_buying_group_request import V3BuyingGroupRequest, V3BuyingGroupRequestDict
from ..models.v3_buying_group_response import V3BuyingGroupResponse
from ..server.server import Server


class BuyingGroup:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BuyingGroupWithRawResponse(client, server, auth)

    def get_contacts_buying_group(
        self,
        body: V3BuyingGroupRequest | V3BuyingGroupRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3BuyingGroupResponse:
        """Identify the buying group within a set of target companies. Supply companies by ``domain`` or Lusha company
        ``id`` - the model scores and labels each returned contact with a persona role.

        **Personas:**
        - ``decision_maker`` — has budget or sign-off authority
        - ``potential_champion`` — likely internal advocate for the purchase
        - ``end_user`` — likely day-to-day user of the product

        Pass ``personas`` to filter to specific roles, or omit it to get all three. Use ``contactsLimit`` to cap how
        many contacts are returned per company (default 60).

        Results are lightweight previews grouped by company. Each contact includes a ``has`` field listing available
        data points, a ``canReveal`` field showing what can be unlocked via Enrich, a ``roles`` array with the assigned
        persona(s), and a ``score`` (0-1) reflecting relevance to the assigned role.

        Use Enrich Contacts with the returned contact ``id`` to reveal emails and phones.

        > **Billing:** Charged per contact returned via the ``buyingGroupContact`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_contacts_buying_group(body, request_options=request_options))

    @property
    def with_raw_response(self) -> BuyingGroupWithRawResponse:
        return self._with_raw_response


class AsyncBuyingGroup:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBuyingGroupWithRawResponse(client, server, auth)

    async def get_contacts_buying_group(
        self,
        body: V3BuyingGroupRequest | V3BuyingGroupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3BuyingGroupResponse:
        """Identify the buying group within a set of target companies. Supply companies by ``domain`` or Lusha company
        ``id`` - the model scores and labels each returned contact with a persona role.

        **Personas:**
        - ``decision_maker`` — has budget or sign-off authority
        - ``potential_champion`` — likely internal advocate for the purchase
        - ``end_user`` — likely day-to-day user of the product

        Pass ``personas`` to filter to specific roles, or omit it to get all three. Use ``contactsLimit`` to cap how
        many contacts are returned per company (default 60).

        Results are lightweight previews grouped by company. Each contact includes a ``has`` field listing available
        data points, a ``canReveal`` field showing what can be unlocked via Enrich, a ``roles`` array with the assigned
        persona(s), and a ``score`` (0-1) reflecting relevance to the assigned role.

        Use Enrich Contacts with the returned contact ``id`` to reveal emails and phones.

        > **Billing:** Charged per contact returned via the ``buyingGroupContact`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_contacts_buying_group(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBuyingGroupWithRawResponse:
        return self._with_raw_response


class BuyingGroupWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_contacts_buying_group(
        self,
        body: V3BuyingGroupRequest | V3BuyingGroupRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3BuyingGroupResponse, GetContactsBuyingGroupErrorBody]:
        """Identify the buying group within a set of target companies. Supply companies by ``domain`` or Lusha company
        ``id`` - the model scores and labels each returned contact with a persona role.

        **Personas:**
        - ``decision_maker`` — has budget or sign-off authority
        - ``potential_champion`` — likely internal advocate for the purchase
        - ``end_user`` — likely day-to-day user of the product

        Pass ``personas`` to filter to specific roles, or omit it to get all three. Use ``contactsLimit`` to cap how
        many contacts are returned per company (default 60).

        Results are lightweight previews grouped by company. Each contact includes a ``has`` field listing available
        data points, a ``canReveal`` field showing what can be unlocked via Enrich, a ``roles`` array with the assigned
        persona(s), and a ``score`` (0-1) reflecting relevance to the assigned role.

        Use Enrich Contacts with the returned contact ``id`` to reveal emails and phones.

        > **Billing:** Charged per contact returned via the ``buyingGroupContact`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/buying-group"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3BuyingGroupRequest | V3BuyingGroupRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3BuyingGroupResponse],
            error_mapper=get_contacts_buying_group_error_mapper,
            request_options=request_options,
        )


class AsyncBuyingGroupWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_contacts_buying_group(
        self,
        body: V3BuyingGroupRequest | V3BuyingGroupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3BuyingGroupResponse, GetContactsBuyingGroupErrorBody]:
        """Identify the buying group within a set of target companies. Supply companies by ``domain`` or Lusha company
        ``id`` - the model scores and labels each returned contact with a persona role.

        **Personas:**
        - ``decision_maker`` — has budget or sign-off authority
        - ``potential_champion`` — likely internal advocate for the purchase
        - ``end_user`` — likely day-to-day user of the product

        Pass ``personas`` to filter to specific roles, or omit it to get all three. Use ``contactsLimit`` to cap how
        many contacts are returned per company (default 60).

        Results are lightweight previews grouped by company. Each contact includes a ``has`` field listing available
        data points, a ``canReveal`` field showing what can be unlocked via Enrich, a ``roles`` array with the assigned
        persona(s), and a ``score`` (0-1) reflecting relevance to the assigned role.

        Use Enrich Contacts with the returned contact ``id`` to reveal emails and phones.

        > **Billing:** Charged per contact returned via the ``buyingGroupContact`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/buying-group"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3BuyingGroupRequest | V3BuyingGroupRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3BuyingGroupResponse],
            error_mapper=get_contacts_buying_group_error_mapper,
            request_options=request_options,
        )
