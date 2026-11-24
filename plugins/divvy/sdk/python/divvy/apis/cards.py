from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_budget_card_error import CreateBudgetCardErrorBody, create_budget_card_error_mapper
from ..errors.delete_card_error import DeleteCardErrorBody, delete_card_error_mapper
from ..errors.freeze_card_error import FreezeCardErrorBody, freeze_card_error_mapper
from ..errors.get_card_error import GetCardErrorBody, get_card_error_mapper
from ..errors.get_pan_jwt_error import GetPanJwtErrorBody, get_pan_jwt_error_mapper
from ..errors.list_cards_error import ListCardsErrorBody, list_cards_error_mapper
from ..errors.unfreeze_card_error import UnfreezeCardErrorBody, unfreeze_card_error_mapper
from ..errors.update_card_error import UpdateCardErrorBody, update_card_error_mapper
from ..models.card_pan_token_response_dto import CardPanTokenResponseDto
from ..models.card_response_dto import CardResponseDto
from ..models.create_card_request_dto import CreateCardRequestDto, CreateCardRequestDtoDict
from ..models.enums.user_deleted_reason_type import UserDeletedReasonTypeOrStr
from ..models.pagination_response_dto_card_response_dto import PaginationResponseDtoCardResponseDto
from ..models.update_card_request_dto import UpdateCardRequestDto, UpdateCardRequestDtoDict
from ..server.server import Server


class Cards:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CardsWithRawResponse(client, server)

    def create_budget_card(
        self,
        body: CreateCardRequestDto | CreateCardRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CardResponseDto:
        """Create a new vendor card.

        See Vendor cards in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a vendor card response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_budget_card(body, api_token=api_token, request_options=request_options)
        )

    def delete_card(
        self,
        card_id: str,
        *,
        reason: UserDeletedReasonTypeOrStr | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing vendor card. A deleted card cannot be restored. The deleted card is not available in the
        list of cards.

        Args:
            card_id: Value sent with the request.
            reason: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a vendor card response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_card(
                card_id, reason=reason, api_token=api_token, request_options=request_options
            ),
        )

    def freeze_card(
        self, card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CardResponseDto:
        """Freeze an existing vendor card.

        You can freeze virtual cards and physical cards. A frozen card cannot be used for payments.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Freeze a vendor card response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.freeze_card(card_id, api_token=api_token, request_options=request_options)
        )

    def get_card(
        self, card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CardResponseDto:
        """Get details about an existing vendor card.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor card details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(self._with_raw_response.get_card(card_id, api_token=api_token, request_options=request_options))

    def get_pan_jwt(
        self, card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CardPanTokenResponseDto:
        """Send a ``GET`` request.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get a PAN JWT token response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_pan_jwt(card_id, api_token=api_token, request_options=request_options)
        )

    def list_cards(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoCardResponseDto:
        """Get a list of card objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of cards response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_cards(
                next_page=next_page,
                prev_page=prev_page,
                max_=max_,
                sort=sort,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def unfreeze_card(
        self, card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CardResponseDto:
        """Unfreeze an existing vendor card. You can unfreeze virtual cards and physical cards.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Unfreeze a vendor card response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.unfreeze_card(card_id, api_token=api_token, request_options=request_options)
        )

    def update_card(
        self,
        card_id: str,
        body: UpdateCardRequestDto | UpdateCardRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CardResponseDto:
        """Update details about an existing vendor card.

        Args:
            card_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a vendor card response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_card(card_id, body, api_token=api_token, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CardsWithRawResponse:
        return self._with_raw_response


class AsyncCards:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCardsWithRawResponse(client, server)

    async def create_budget_card(
        self,
        body: CreateCardRequestDto | CreateCardRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CardResponseDto:
        """Create a new vendor card.

        See Vendor cards in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a vendor card response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_budget_card(body, api_token=api_token, request_options=request_options)
        )

    async def delete_card(
        self,
        card_id: str,
        *,
        reason: UserDeletedReasonTypeOrStr | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing vendor card. A deleted card cannot be restored. The deleted card is not available in the
        list of cards.

        Args:
            card_id: Value sent with the request.
            reason: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a vendor card response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_card(
                card_id, reason=reason, api_token=api_token, request_options=request_options
            ),
        )

    async def freeze_card(
        self, card_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CardResponseDto:
        """Freeze an existing vendor card.

        You can freeze virtual cards and physical cards. A frozen card cannot be used for payments.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Freeze a vendor card response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.freeze_card(card_id, api_token=api_token, request_options=request_options)
        )

    async def get_card(
        self, card_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CardResponseDto:
        """Get details about an existing vendor card.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor card details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_card(card_id, api_token=api_token, request_options=request_options)
        )

    async def get_pan_jwt(
        self, card_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CardPanTokenResponseDto:
        """Send a ``GET`` request.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get a PAN JWT token response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pan_jwt(card_id, api_token=api_token, request_options=request_options)
        )

    async def list_cards(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoCardResponseDto:
        """Get a list of card objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of cards response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_cards(
                next_page=next_page,
                prev_page=prev_page,
                max_=max_,
                sort=sort,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def unfreeze_card(
        self, card_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CardResponseDto:
        """Unfreeze an existing vendor card. You can unfreeze virtual cards and physical cards.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Unfreeze a vendor card response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.unfreeze_card(card_id, api_token=api_token, request_options=request_options)
        )

    async def update_card(
        self,
        card_id: str,
        body: UpdateCardRequestDto | UpdateCardRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CardResponseDto:
        """Update details about an existing vendor card.

        Args:
            card_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a vendor card response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_card(
                card_id, body, api_token=api_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCardsWithRawResponse:
        return self._with_raw_response


class CardsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_budget_card(
        self,
        body: CreateCardRequestDto | CreateCardRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CardResponseDto, CreateBudgetCardErrorBody]:
        """Create a new vendor card.

        See Vendor cards in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/cards"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCardRequestDto | CreateCardRequestDtoDict](body),
            decoder=json_decoder[CardResponseDto],
            error_mapper=create_budget_card_error_mapper,
            request_options=request_options,
        )

    def delete_card(
        self,
        card_id: str,
        *,
        reason: UserDeletedReasonTypeOrStr | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCardErrorBody]:
        """Delete an existing vendor card. A deleted card cannot be restored. The deleted card is not available in the
        list of cards.

        Args:
            card_id: Value sent with the request.
            reason: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/cards/{cardId}"),
            path_params=[param[str]("cardId", card_id)],
            query_params=[param[UserDeletedReasonTypeOrStr | None]("reason", reason)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_card_error_mapper,
            request_options=request_options,
        )

    def freeze_card(
        self, card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CardResponseDto, FreezeCardErrorBody]:
        """Freeze an existing vendor card.

        You can freeze virtual cards and physical cards. A frozen card cannot be used for payments.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/cards/{cardId}/freeze"),
            path_params=[param[str]("cardId", card_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[CardResponseDto],
            error_mapper=freeze_card_error_mapper,
            request_options=request_options,
        )

    def get_card(
        self, card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CardResponseDto, GetCardErrorBody]:
        """Get details about an existing vendor card.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/cards/{cardId}"),
            path_params=[param[str]("cardId", card_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[CardResponseDto],
            error_mapper=get_card_error_mapper,
            request_options=request_options,
        )

    def get_pan_jwt(
        self, card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CardPanTokenResponseDto, GetPanJwtErrorBody]:
        """Send a ``GET`` request.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/cards/{cardId}/pan-jwt"),
            path_params=[param[str]("cardId", card_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[CardPanTokenResponseDto],
            error_mapper=get_pan_jwt_error_mapper,
            request_options=request_options,
        )

    def list_cards(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoCardResponseDto, ListCardsErrorBody]:
        """Get a list of card objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/cards"),
            query_params=[
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[PaginationResponseDtoCardResponseDto],
            error_mapper=list_cards_error_mapper,
            request_options=request_options,
        )

    def unfreeze_card(
        self, card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CardResponseDto, UnfreezeCardErrorBody]:
        """Unfreeze an existing vendor card. You can unfreeze virtual cards and physical cards.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/cards/{cardId}/unfreeze"),
            path_params=[param[str]("cardId", card_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[CardResponseDto],
            error_mapper=unfreeze_card_error_mapper,
            request_options=request_options,
        )

    def update_card(
        self,
        card_id: str,
        body: UpdateCardRequestDto | UpdateCardRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CardResponseDto, UpdateCardErrorBody]:
        """Update details about an existing vendor card.

        Args:
            card_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/spend/cards/{cardId}"),
            path_params=[param[str]("cardId", card_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCardRequestDto | UpdateCardRequestDtoDict](body),
            decoder=json_decoder[CardResponseDto],
            error_mapper=update_card_error_mapper,
            request_options=request_options,
        )


class AsyncCardsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_budget_card(
        self,
        body: CreateCardRequestDto | CreateCardRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CardResponseDto, CreateBudgetCardErrorBody]:
        """Create a new vendor card.

        See Vendor cards in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/cards"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCardRequestDto | CreateCardRequestDtoDict](body),
            decoder=async_json_decoder[CardResponseDto],
            error_mapper=create_budget_card_error_mapper,
            request_options=request_options,
        )

    async def delete_card(
        self,
        card_id: str,
        *,
        reason: UserDeletedReasonTypeOrStr | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCardErrorBody]:
        """Delete an existing vendor card. A deleted card cannot be restored. The deleted card is not available in the
        list of cards.

        Args:
            card_id: Value sent with the request.
            reason: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/cards/{cardId}"),
            path_params=[param[str]("cardId", card_id)],
            query_params=[param[UserDeletedReasonTypeOrStr | None]("reason", reason)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_card_error_mapper,
            request_options=request_options,
        )

    async def freeze_card(
        self, card_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CardResponseDto, FreezeCardErrorBody]:
        """Freeze an existing vendor card.

        You can freeze virtual cards and physical cards. A frozen card cannot be used for payments.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/cards/{cardId}/freeze"),
            path_params=[param[str]("cardId", card_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[CardResponseDto],
            error_mapper=freeze_card_error_mapper,
            request_options=request_options,
        )

    async def get_card(
        self, card_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CardResponseDto, GetCardErrorBody]:
        """Get details about an existing vendor card.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/cards/{cardId}"),
            path_params=[param[str]("cardId", card_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[CardResponseDto],
            error_mapper=get_card_error_mapper,
            request_options=request_options,
        )

    async def get_pan_jwt(
        self, card_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CardPanTokenResponseDto, GetPanJwtErrorBody]:
        """Send a ``GET`` request.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/cards/{cardId}/pan-jwt"),
            path_params=[param[str]("cardId", card_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[CardPanTokenResponseDto],
            error_mapper=get_pan_jwt_error_mapper,
            request_options=request_options,
        )

    async def list_cards(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoCardResponseDto, ListCardsErrorBody]:
        """Get a list of card objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/cards"),
            query_params=[
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[PaginationResponseDtoCardResponseDto],
            error_mapper=list_cards_error_mapper,
            request_options=request_options,
        )

    async def unfreeze_card(
        self, card_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CardResponseDto, UnfreezeCardErrorBody]:
        """Unfreeze an existing vendor card. You can unfreeze virtual cards and physical cards.

        Args:
            card_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/cards/{cardId}/unfreeze"),
            path_params=[param[str]("cardId", card_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[CardResponseDto],
            error_mapper=unfreeze_card_error_mapper,
            request_options=request_options,
        )

    async def update_card(
        self,
        card_id: str,
        body: UpdateCardRequestDto | UpdateCardRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CardResponseDto, UpdateCardErrorBody]:
        """Update details about an existing vendor card.

        Args:
            card_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/spend/cards/{cardId}"),
            path_params=[param[str]("cardId", card_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCardRequestDto | UpdateCardRequestDtoDict](body),
            decoder=async_json_decoder[CardResponseDto],
            error_mapper=update_card_error_mapper,
            request_options=request_options,
        )
