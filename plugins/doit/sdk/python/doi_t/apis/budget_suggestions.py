from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
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
from ..errors.accept_budget_suggestion_error import (
    AcceptBudgetSuggestionErrorBody,
    accept_budget_suggestion_error_mapper,
)
from ..errors.dismiss_budget_suggestion_error import (
    DismissBudgetSuggestionErrorBody,
    dismiss_budget_suggestion_error_mapper,
)
from ..errors.list_budget_suggestions_error import ListBudgetSuggestionsErrorBody, list_budget_suggestions_error_mapper
from ..models.analytics_v1_budget_suggestions_actions_accept_response import (
    AnalyticsV1BudgetSuggestionsActionsAcceptResponse,
)
from ..models.analytics_v1_budget_suggestions_actions_dismiss_response import (
    AnalyticsV1BudgetSuggestionsActionsDismissResponse,
)
from ..models.analytics_v1_budget_suggestions_response import AnalyticsV1BudgetSuggestionsResponse
from ..models.budget_suggestion_accept_request import BudgetSuggestionAcceptRequest, BudgetSuggestionAcceptRequestDict
from ..models.budget_suggestion_dismiss_request import (
    BudgetSuggestionDismissRequest,
    BudgetSuggestionDismissRequestDict,
)
from ..server.server import Server


class BudgetSuggestions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BudgetSuggestionsWithRawResponse(client, server, auth)

    def accept_budget_suggestion(
        self,
        id_: str,
        body: BudgetSuggestionAcceptRequest | BudgetSuggestionAcceptRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsV1BudgetSuggestionsActionsAcceptResponse:
        """Marks the suggestion as accepted and links it to an existing budget. Create the budget first via ``POST
        /analytics/v1/budgets``, then pass its ``id`` as ``budgetId``. The budget must belong to your account.

        Args:
            id_: Budget suggestion ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The suggestion was accepted and linked to the budget.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.accept_budget_suggestion(id_, body, request_options=request_options))

    def dismiss_budget_suggestion(
        self,
        id_: str,
        *,
        body: BudgetSuggestionDismissRequest | BudgetSuggestionDismissRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsV1BudgetSuggestionsActionsDismissResponse:
        """Marks the suggestion as dismissed so it no longer appears in the pending list.

        Args:
            id_: Budget suggestion ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The suggestion was dismissed.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.dismiss_budget_suggestion(id_, body=body, request_options=request_options)
        )

    def list_budget_suggestions(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> AnalyticsV1BudgetSuggestionsResponse:
        """Returns the pending AI-generated budget suggestions for your account. The set is small (a handful of pending
        suggestions) and is returned in full. Each suggestion can be accepted (after you create a matching budget via
        ``POST /analytics/v1/budgets``) or dismissed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.list_budget_suggestions(request_options=request_options))

    @property
    def with_raw_response(self) -> BudgetSuggestionsWithRawResponse:
        return self._with_raw_response


class AsyncBudgetSuggestions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBudgetSuggestionsWithRawResponse(client, server, auth)

    async def accept_budget_suggestion(
        self,
        id_: str,
        body: BudgetSuggestionAcceptRequest | BudgetSuggestionAcceptRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsV1BudgetSuggestionsActionsAcceptResponse:
        """Marks the suggestion as accepted and links it to an existing budget. Create the budget first via ``POST
        /analytics/v1/budgets``, then pass its ``id`` as ``budgetId``. The budget must belong to your account.

        Args:
            id_: Budget suggestion ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The suggestion was accepted and linked to the budget.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.accept_budget_suggestion(id_, body, request_options=request_options)
        )

    async def dismiss_budget_suggestion(
        self,
        id_: str,
        *,
        body: BudgetSuggestionDismissRequest | BudgetSuggestionDismissRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsV1BudgetSuggestionsActionsDismissResponse:
        """Marks the suggestion as dismissed so it no longer appears in the pending list.

        Args:
            id_: Budget suggestion ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The suggestion was dismissed.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.dismiss_budget_suggestion(id_, body=body, request_options=request_options)
        )

    async def list_budget_suggestions(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AnalyticsV1BudgetSuggestionsResponse:
        """Returns the pending AI-generated budget suggestions for your account. The set is small (a handful of pending
        suggestions) and is returned in full. Each suggestion can be accepted (after you create a matching budget via
        ``POST /analytics/v1/budgets``) or dismissed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.list_budget_suggestions(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBudgetSuggestionsWithRawResponse:
        return self._with_raw_response


class BudgetSuggestionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def accept_budget_suggestion(
        self,
        id_: str,
        body: BudgetSuggestionAcceptRequest | BudgetSuggestionAcceptRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1BudgetSuggestionsActionsAcceptResponse, AcceptBudgetSuggestionErrorBody]:
        """Marks the suggestion as accepted and links it to an existing budget. Create the budget first via ``POST
        /analytics/v1/budgets``, then pass its ``id`` as ``budgetId``. The budget must belong to your account.

        Args:
            id_: Budget suggestion ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/budget-suggestions/{id}/actions/accept"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetSuggestionAcceptRequest | BudgetSuggestionAcceptRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnalyticsV1BudgetSuggestionsActionsAcceptResponse],
            error_mapper=accept_budget_suggestion_error_mapper,
            request_options=request_options,
        )

    def dismiss_budget_suggestion(
        self,
        id_: str,
        *,
        body: BudgetSuggestionDismissRequest | BudgetSuggestionDismissRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1BudgetSuggestionsActionsDismissResponse, DismissBudgetSuggestionErrorBody]:
        """Marks the suggestion as dismissed so it no longer appears in the pending list.

        Args:
            id_: Budget suggestion ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/budget-suggestions/{id}/actions/dismiss"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetSuggestionDismissRequest | BudgetSuggestionDismissRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnalyticsV1BudgetSuggestionsActionsDismissResponse],
            error_mapper=dismiss_budget_suggestion_error_mapper,
            request_options=request_options,
        )

    def list_budget_suggestions(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AnalyticsV1BudgetSuggestionsResponse, ListBudgetSuggestionsErrorBody]:
        """Returns the pending AI-generated budget suggestions for your account. The set is small (a handful of pending
        suggestions) and is returned in full. Each suggestion can be accepted (after you create a matching budget via
        ``POST /analytics/v1/budgets``) or dismissed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/budget-suggestions"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnalyticsV1BudgetSuggestionsResponse],
            error_mapper=list_budget_suggestions_error_mapper,
            request_options=request_options,
        )


class AsyncBudgetSuggestionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def accept_budget_suggestion(
        self,
        id_: str,
        body: BudgetSuggestionAcceptRequest | BudgetSuggestionAcceptRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1BudgetSuggestionsActionsAcceptResponse, AcceptBudgetSuggestionErrorBody]:
        """Marks the suggestion as accepted and links it to an existing budget. Create the budget first via ``POST
        /analytics/v1/budgets``, then pass its ``id`` as ``budgetId``. The budget must belong to your account.

        Args:
            id_: Budget suggestion ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/budget-suggestions/{id}/actions/accept"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetSuggestionAcceptRequest | BudgetSuggestionAcceptRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnalyticsV1BudgetSuggestionsActionsAcceptResponse],
            error_mapper=accept_budget_suggestion_error_mapper,
            request_options=request_options,
        )

    async def dismiss_budget_suggestion(
        self,
        id_: str,
        *,
        body: BudgetSuggestionDismissRequest | BudgetSuggestionDismissRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1BudgetSuggestionsActionsDismissResponse, DismissBudgetSuggestionErrorBody]:
        """Marks the suggestion as dismissed so it no longer appears in the pending list.

        Args:
            id_: Budget suggestion ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/budget-suggestions/{id}/actions/dismiss"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetSuggestionDismissRequest | BudgetSuggestionDismissRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnalyticsV1BudgetSuggestionsActionsDismissResponse],
            error_mapper=dismiss_budget_suggestion_error_mapper,
            request_options=request_options,
        )

    async def list_budget_suggestions(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AnalyticsV1BudgetSuggestionsResponse, ListBudgetSuggestionsErrorBody]:
        """Returns the pending AI-generated budget suggestions for your account. The set is small (a handful of pending
        suggestions) and is returned in full. Each suggestion can be accepted (after you create a matching budget via
        ``POST /analytics/v1/budgets``) or dismissed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/budget-suggestions"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnalyticsV1BudgetSuggestionsResponse],
            error_mapper=list_budget_suggestions_error_mapper,
            request_options=request_options,
        )
