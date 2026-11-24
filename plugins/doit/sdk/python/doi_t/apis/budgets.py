from __future__ import annotations

from typing import Any
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
from ..errors.create_budget_error import CreateBudgetErrorBody, create_budget_error_mapper
from ..errors.delete_budget_error import DeleteBudgetErrorBody, delete_budget_error_mapper
from ..errors.get_budget_error import GetBudgetErrorBody, get_budget_error_mapper
from ..errors.list_budgets_error import ListBudgetsErrorBody, list_budgets_error_mapper
from ..errors.update_budget_error import UpdateBudgetErrorBody, update_budget_error_mapper
from ..models.analytics_v1_budgets_response import AnalyticsV1BudgetsResponse
from ..models.budget_api import BudgetApi
from ..models.budget_create_update_request import BudgetCreateUpdateRequest, BudgetCreateUpdateRequestDict
from ..server.server import Server


class Budgets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BudgetsWithRawResponse(client, server, auth)

    def create_budget(
        self,
        *,
        body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BudgetApi:
        """Create a new budget

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - New budget created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_budget(body=body, request_options=request_options))

    def delete_budget(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes the specified budget.

        Args:
            id_: Budget ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Budget deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_budget(id_, request_options=request_options))

    def get_budget(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> BudgetApi:
        """Returns the current utilization and configuration of the specified budget.

        Args:
            id_: Budget ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Budget details returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_budget(id_, request_options=request_options))

    def list_budgets(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsV1BudgetsResponse:
        """Returns a list of budgets that your account has access to. Budgets are listed in reverse chronological order
        by default. Each budget includes a server-computed ``riskStatus`` (``atRisk``, ``onTrack``, or ``unknown``), and
        the response includes a ``riskAggregations`` summary of risk counts across the full filtered result set (all
        pages, not just the current page).

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is "key:[<value>]". Available
                keys: owner, budgetName, lastModified in ms (>lasModified), riskStatus (one of "atRisk", "onTrack",
                "unknown"). Multiple filters can be connected using a pipe |. Note that using different keys in the same
                filter results in "AND," while using the same key multiple times in the same filter results in "OR"
                (except riskStatus, where only the first occurrence is honored). A budget is "atRisk" when it has
                already exceeded its configured amount, or its forecast projects it will exceed the configured amount
                before the current period ends. Budgets with no forecast data yet, a fixed budget whose period has
                already expired, or that are invalid/draft are classified "unknown". Filtering to riskStatus:atRisk
                sorts results by earliest projected breach date (day granularity) ascending instead of the default
                order; budgets that tie on breach day, including every already-breached budget, resolve to a fixed,
                repeatable order across requests rather than an arbitrary one. Because riskStatus is computed from live,
                periodically-refreshed budget data, paginated results filtered by riskStatus may shift between page
                requests if budget data refreshes mid-pagination.
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            min_creation_time: Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created after or at this timestamp are returned.
            max_creation_time: Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_budgets(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                name_contains=name_contains,
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                request_options=request_options,
            ),
        )

    def update_budget(
        self,
        id_: str,
        *,
        body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BudgetApi:
        """Updates the specified budget.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Budget updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_budget(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> BudgetsWithRawResponse:
        return self._with_raw_response


class AsyncBudgets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBudgetsWithRawResponse(client, server, auth)

    async def create_budget(
        self,
        *,
        body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BudgetApi:
        """Create a new budget

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - New budget created.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_budget(body=body, request_options=request_options))

    async def delete_budget(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Deletes the specified budget.

        Args:
            id_: Budget ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Budget deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_budget(id_, request_options=request_options))

    async def get_budget(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> BudgetApi:
        """Returns the current utilization and configuration of the specified budget.

        Args:
            id_: Budget ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Budget details returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_budget(id_, request_options=request_options))

    async def list_budgets(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsV1BudgetsResponse:
        """Returns a list of budgets that your account has access to. Budgets are listed in reverse chronological order
        by default. Each budget includes a server-computed ``riskStatus`` (``atRisk``, ``onTrack``, or ``unknown``), and
        the response includes a ``riskAggregations`` summary of risk counts across the full filtered result set (all
        pages, not just the current page).

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is "key:[<value>]". Available
                keys: owner, budgetName, lastModified in ms (>lasModified), riskStatus (one of "atRisk", "onTrack",
                "unknown"). Multiple filters can be connected using a pipe |. Note that using different keys in the same
                filter results in "AND," while using the same key multiple times in the same filter results in "OR"
                (except riskStatus, where only the first occurrence is honored). A budget is "atRisk" when it has
                already exceeded its configured amount, or its forecast projects it will exceed the configured amount
                before the current period ends. Budgets with no forecast data yet, a fixed budget whose period has
                already expired, or that are invalid/draft are classified "unknown". Filtering to riskStatus:atRisk
                sorts results by earliest projected breach date (day granularity) ascending instead of the default
                order; budgets that tie on breach day, including every already-breached budget, resolve to a fixed,
                repeatable order across requests rather than an arbitrary one. Because riskStatus is computed from live,
                periodically-refreshed budget data, paginated results filtered by riskStatus may shift between page
                requests if budget data refreshes mid-pagination.
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            min_creation_time: Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created after or at this timestamp are returned.
            max_creation_time: Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_budgets(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                name_contains=name_contains,
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                request_options=request_options,
            ),
        )

    async def update_budget(
        self,
        id_: str,
        *,
        body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BudgetApi:
        """Updates the specified budget.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Budget updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_budget(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBudgetsWithRawResponse:
        return self._with_raw_response


class BudgetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_budget(
        self,
        *,
        body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetApi, CreateBudgetErrorBody]:
        """Create a new budget

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/budgets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[BudgetApi],
            error_mapper=create_budget_error_mapper,
            request_options=request_options,
        )

    def delete_budget(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteBudgetErrorBody]:
        """Deletes the specified budget.

        Args:
            id_: Budget ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/budgets/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Any],
            error_mapper=delete_budget_error_mapper,
            request_options=request_options,
        )

    def get_budget(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BudgetApi, GetBudgetErrorBody]:
        """Returns the current utilization and configuration of the specified budget.

        Args:
            id_: Budget ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/budgets/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[BudgetApi],
            error_mapper=get_budget_error_mapper,
            request_options=request_options,
        )

    def list_budgets(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1BudgetsResponse, ListBudgetsErrorBody]:
        """Returns a list of budgets that your account has access to. Budgets are listed in reverse chronological order
        by default. Each budget includes a server-computed ``riskStatus`` (``atRisk``, ``onTrack``, or ``unknown``), and
        the response includes a ``riskAggregations`` summary of risk counts across the full filtered result set (all
        pages, not just the current page).

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is "key:[<value>]". Available
                keys: owner, budgetName, lastModified in ms (>lasModified), riskStatus (one of "atRisk", "onTrack",
                "unknown"). Multiple filters can be connected using a pipe |. Note that using different keys in the same
                filter results in "AND," while using the same key multiple times in the same filter results in "OR"
                (except riskStatus, where only the first occurrence is honored). A budget is "atRisk" when it has
                already exceeded its configured amount, or its forecast projects it will exceed the configured amount
                before the current period ends. Budgets with no forecast data yet, a fixed budget whose period has
                already expired, or that are invalid/draft are classified "unknown". Filtering to riskStatus:atRisk
                sorts results by earliest projected breach date (day granularity) ascending instead of the default
                order; budgets that tie on breach day, including every already-breached budget, resolve to a fixed,
                repeatable order across requests rather than an arbitrary one. Because riskStatus is computed from live,
                periodically-refreshed budget data, paginated results filtered by riskStatus may shift between page
                requests if budget data refreshes mid-pagination.
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            min_creation_time: Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created after or at this timestamp are returned.
            max_creation_time: Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/budgets"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("nameContains", name_contains),
                param[str | None]("minCreationTime", min_creation_time),
                param[str | None]("maxCreationTime", max_creation_time),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnalyticsV1BudgetsResponse],
            error_mapper=list_budgets_error_mapper,
            request_options=request_options,
        )

    def update_budget(
        self,
        id_: str,
        *,
        body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetApi, UpdateBudgetErrorBody]:
        """Updates the specified budget.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/budgets/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[BudgetApi],
            error_mapper=update_budget_error_mapper,
            request_options=request_options,
        )


class AsyncBudgetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_budget(
        self,
        *,
        body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetApi, CreateBudgetErrorBody]:
        """Create a new budget

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/budgets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[BudgetApi],
            error_mapper=create_budget_error_mapper,
            request_options=request_options,
        )

    async def delete_budget(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteBudgetErrorBody]:
        """Deletes the specified budget.

        Args:
            id_: Budget ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/budgets/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Any],
            error_mapper=delete_budget_error_mapper,
            request_options=request_options,
        )

    async def get_budget(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BudgetApi, GetBudgetErrorBody]:
        """Returns the current utilization and configuration of the specified budget.

        Args:
            id_: Budget ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/budgets/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[BudgetApi],
            error_mapper=get_budget_error_mapper,
            request_options=request_options,
        )

    async def list_budgets(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1BudgetsResponse, ListBudgetsErrorBody]:
        """Returns a list of budgets that your account has access to. Budgets are listed in reverse chronological order
        by default. Each budget includes a server-computed ``riskStatus`` (``atRisk``, ``onTrack``, or ``unknown``), and
        the response includes a ``riskAggregations`` summary of risk counts across the full filtered result set (all
        pages, not just the current page).

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results of the request. The syntax is "key:[<value>]". Available
                keys: owner, budgetName, lastModified in ms (>lasModified), riskStatus (one of "atRisk", "onTrack",
                "unknown"). Multiple filters can be connected using a pipe |. Note that using different keys in the same
                filter results in "AND," while using the same key multiple times in the same filter results in "OR"
                (except riskStatus, where only the first occurrence is honored). A budget is "atRisk" when it has
                already exceeded its configured amount, or its forecast projects it will exceed the configured amount
                before the current period ends. Budgets with no forecast data yet, a fixed budget whose period has
                already expired, or that are invalid/draft are classified "unknown". Filtering to riskStatus:atRisk
                sorts results by earliest projected breach date (day granularity) ascending instead of the default
                order; budgets that tie on breach day, including every already-breached budget, resolve to a fixed,
                repeatable order across requests rather than an arbitrary one. Because riskStatus is computed from live,
                periodically-refreshed budget data, paginated results filtered by riskStatus may shift between page
                requests if budget data refreshes mid-pagination.
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            min_creation_time: Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created after or at this timestamp are returned.
            max_creation_time: Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/budgets"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("nameContains", name_contains),
                param[str | None]("minCreationTime", min_creation_time),
                param[str | None]("maxCreationTime", max_creation_time),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnalyticsV1BudgetsResponse],
            error_mapper=list_budgets_error_mapper,
            request_options=request_options,
        )

    async def update_budget(
        self,
        id_: str,
        *,
        body: BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetApi, UpdateBudgetErrorBody]:
        """Updates the specified budget.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/budgets/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetCreateUpdateRequest | BudgetCreateUpdateRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[BudgetApi],
            error_mapper=update_budget_error_mapper,
            request_options=request_options,
        )
