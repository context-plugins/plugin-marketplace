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
from ..errors.create_budget_error import CreateBudgetErrorBody, create_budget_error_mapper
from ..errors.delete_budget_error import DeleteBudgetErrorBody, delete_budget_error_mapper
from ..errors.delete_budget_member_error import DeleteBudgetMemberErrorBody, delete_budget_member_error_mapper
from ..errors.get_budget_error import GetBudgetErrorBody, get_budget_error_mapper
from ..errors.get_budget_member_error import GetBudgetMemberErrorBody, get_budget_member_error_mapper
from ..errors.list_budget_members_error import ListBudgetMembersErrorBody, list_budget_members_error_mapper
from ..errors.list_budgets_error import ListBudgetsErrorBody, list_budgets_error_mapper
from ..errors.update_budget_error import UpdateBudgetErrorBody, update_budget_error_mapper
from ..errors.upsert_budget_member_error import UpsertBudgetMemberErrorBody, upsert_budget_member_error_mapper
from ..errors.upsert_bulk_budget_users_error import (
    UpsertBulkBudgetUsersErrorBody,
    upsert_bulk_budget_users_error_mapper,
)
from ..models.budget_create_dto import BudgetCreateDto, BudgetCreateDtoDict
from ..models.budget_member_bulk_upsert_request_dto import (
    BudgetMemberBulkUpsertRequestDto,
    BudgetMemberBulkUpsertRequestDtoDict,
)
from ..models.budget_member_response_dto import BudgetMemberResponseDto
from ..models.budget_member_upsert_request_dto import BudgetMemberUpsertRequestDto, BudgetMemberUpsertRequestDtoDict
from ..models.budget_response_dto import BudgetResponseDto
from ..models.budget_update_dto import BudgetUpdateDto, BudgetUpdateDtoDict
from ..models.pagination_response_dto_budget_member_response_dto import PaginationResponseDtoBudgetMemberResponseDto
from ..models.pagination_response_dto_budget_response_dto import PaginationResponseDtoBudgetResponseDto
from ..models.spend_status_dto import SpendStatusDto
from ..server.server import Server


class Budgets:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = BudgetsWithRawResponse(client, server)

    def create_budget(
        self,
        body: BudgetCreateDto | BudgetCreateDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BudgetResponseDto:
        """Create a new budget for a company.

        See Budgets and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a budget response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(self._with_raw_response.create_budget(body, api_token=api_token, request_options=request_options))

    def delete_budget(
        self, budget_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete an existing budget. A deleted budget cannot be restored. The deleted budget is not available in the
        list of budgets.

        **Note**:
        * While you cannot restore a deleted budget with the API, you can unretire budgets in the BILL web app and
            mobile app. An unretired budget is active and is available for use.
        * A one-time budget can be unretired at any time. A ``recurringInterval`` budget can be unretired within one
            interval. For example, if a ``MONTHLY`` budget is retired in January, you can unretire it in February. You
            cannot unretire this budget in March or any later month.

        Args:
            budget_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a budget response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_budget(budget_id, api_token=api_token, request_options=request_options)
        )

    def delete_budget_member(
        self,
        budget_id: str,
        user_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a user member from an existing budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a budget member response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_budget_member(
                budget_id, user_id, api_token=api_token, request_options=request_options
            ),
        )

    def get_budget(
        self, budget_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> BudgetResponseDto:
        """Get details about an existing budget.

        Args:
            budget_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get budget details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_budget(budget_id, api_token=api_token, request_options=request_options)
        )

    def get_budget_member(
        self,
        budget_id: str,
        user_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BudgetMemberResponseDto:
        """Get details about a user member assigned to an existing budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get budget member details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_budget_member(
                budget_id, user_id, api_token=api_token, request_options=request_options
            ),
        )

    def list_budget_members(
        self,
        budget_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoBudgetMemberResponseDto:
        """Get a list of user members assigned to an existing budget. By default, you get 20 results on one page of
        results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            budget_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of budget members response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_budget_members(
                budget_id,
                max_=max_,
                next_page=next_page,
                prev_page=prev_page,
                sort=sort,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def list_budgets(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoBudgetResponseDto:
        """Get a list of budget objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            Get list of budgets response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_budgets(
                next_page=next_page,
                prev_page=prev_page,
                max_=max_,
                sort=sort,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def update_budget(
        self,
        budget_id: str,
        body: BudgetUpdateDto | BudgetUpdateDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BudgetResponseDto:
        """Update details about an existing budget.

        Args:
            budget_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a budget response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_budget(budget_id, body, api_token=api_token, request_options=request_options)
        )

    def upsert_budget_member(
        self,
        budget_id: str,
        user_id: str,
        body: BudgetMemberUpsertRequestDto | BudgetMemberUpsertRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BudgetMemberResponseDto:
        """Add a new user member to an existing budget. You can also update details about an existing user member
        assigned to the budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add or update a budget member response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.upsert_budget_member(
                budget_id, user_id, body, api_token=api_token, request_options=request_options
            ),
        )

    def upsert_bulk_budget_users(
        self,
        budget_id: str,
        body: BudgetMemberBulkUpsertRequestDto | BudgetMemberBulkUpsertRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SpendStatusDto:
        """Update details about multiple user members assigned to an existing budget.

        Args:
            budget_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple budget members response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.upsert_bulk_budget_users(
                budget_id, body, api_token=api_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BudgetsWithRawResponse:
        return self._with_raw_response


class AsyncBudgets:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncBudgetsWithRawResponse(client, server)

    async def create_budget(
        self,
        body: BudgetCreateDto | BudgetCreateDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BudgetResponseDto:
        """Create a new budget for a company.

        See Budgets and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a budget response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_budget(body, api_token=api_token, request_options=request_options)
        )

    async def delete_budget(
        self, budget_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete an existing budget. A deleted budget cannot be restored. The deleted budget is not available in the
        list of budgets.

        **Note**:
        * While you cannot restore a deleted budget with the API, you can unretire budgets in the BILL web app and
            mobile app. An unretired budget is active and is available for use.
        * A one-time budget can be unretired at any time. A ``recurringInterval`` budget can be unretired within one
            interval. For example, if a ``MONTHLY`` budget is retired in January, you can unretire it in February. You
            cannot unretire this budget in March or any later month.

        Args:
            budget_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a budget response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_budget(budget_id, api_token=api_token, request_options=request_options)
        )

    async def delete_budget_member(
        self,
        budget_id: str,
        user_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a user member from an existing budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a budget member response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_budget_member(
                budget_id, user_id, api_token=api_token, request_options=request_options
            ),
        )

    async def get_budget(
        self, budget_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BudgetResponseDto:
        """Get details about an existing budget.

        Args:
            budget_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get budget details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_budget(budget_id, api_token=api_token, request_options=request_options)
        )

    async def get_budget_member(
        self,
        budget_id: str,
        user_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BudgetMemberResponseDto:
        """Get details about a user member assigned to an existing budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get budget member details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_budget_member(
                budget_id, user_id, api_token=api_token, request_options=request_options
            ),
        )

    async def list_budget_members(
        self,
        budget_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoBudgetMemberResponseDto:
        """Get a list of user members assigned to an existing budget. By default, you get 20 results on one page of
        results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            budget_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of budget members response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_budget_members(
                budget_id,
                max_=max_,
                next_page=next_page,
                prev_page=prev_page,
                sort=sort,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def list_budgets(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoBudgetResponseDto:
        """Get a list of budget objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            Get list of budgets response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_budgets(
                next_page=next_page,
                prev_page=prev_page,
                max_=max_,
                sort=sort,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def update_budget(
        self,
        budget_id: str,
        body: BudgetUpdateDto | BudgetUpdateDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BudgetResponseDto:
        """Update details about an existing budget.

        Args:
            budget_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a budget response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_budget(
                budget_id, body, api_token=api_token, request_options=request_options
            ),
        )

    async def upsert_budget_member(
        self,
        budget_id: str,
        user_id: str,
        body: BudgetMemberUpsertRequestDto | BudgetMemberUpsertRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BudgetMemberResponseDto:
        """Add a new user member to an existing budget. You can also update details about an existing user member
        assigned to the budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add or update a budget member response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.upsert_budget_member(
                budget_id, user_id, body, api_token=api_token, request_options=request_options
            ),
        )

    async def upsert_bulk_budget_users(
        self,
        budget_id: str,
        body: BudgetMemberBulkUpsertRequestDto | BudgetMemberBulkUpsertRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SpendStatusDto:
        """Update details about multiple user members assigned to an existing budget.

        Args:
            budget_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple budget members response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.upsert_bulk_budget_users(
                budget_id, body, api_token=api_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBudgetsWithRawResponse:
        return self._with_raw_response


class BudgetsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_budget(
        self,
        body: BudgetCreateDto | BudgetCreateDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetResponseDto, CreateBudgetErrorBody]:
        """Create a new budget for a company.

        See Budgets and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/budgets"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetCreateDto | BudgetCreateDtoDict](body),
            decoder=json_decoder[BudgetResponseDto],
            error_mapper=create_budget_error_mapper,
            request_options=request_options,
        )

    def delete_budget(
        self, budget_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBudgetErrorBody]:
        """Delete an existing budget. A deleted budget cannot be restored. The deleted budget is not available in the
        list of budgets.

        **Note**:
        * While you cannot restore a deleted budget with the API, you can unretire budgets in the BILL web app and
            mobile app. An unretired budget is active and is available for use.
        * A one-time budget can be unretired at any time. A ``recurringInterval`` budget can be unretired within one
            interval. For example, if a ``MONTHLY`` budget is retired in January, you can unretire it in February. You
            cannot unretire this budget in March or any later month.

        Args:
            budget_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}"),
            path_params=[param[str]("budgetId", budget_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_budget_error_mapper,
            request_options=request_options,
        )

    def delete_budget_member(
        self,
        budget_id: str,
        user_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteBudgetMemberErrorBody]:
        """Delete a user member from an existing budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}/members/{userId}"),
            path_params=[param[str]("budgetId", budget_id), param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_budget_member_error_mapper,
            request_options=request_options,
        )

    def get_budget(
        self, budget_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BudgetResponseDto, GetBudgetErrorBody]:
        """Get details about an existing budget.

        Args:
            budget_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}"),
            path_params=[param[str]("budgetId", budget_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[BudgetResponseDto],
            error_mapper=get_budget_error_mapper,
            request_options=request_options,
        )

    def get_budget_member(
        self,
        budget_id: str,
        user_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetMemberResponseDto, GetBudgetMemberErrorBody]:
        """Get details about a user member assigned to an existing budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}/members/{userId}"),
            path_params=[param[str]("budgetId", budget_id), param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[BudgetMemberResponseDto],
            error_mapper=get_budget_member_error_mapper,
            request_options=request_options,
        )

    def list_budget_members(
        self,
        budget_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoBudgetMemberResponseDto, ListBudgetMembersErrorBody]:
        """Get a list of user members assigned to an existing budget. By default, you get 20 results on one page of
        results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            budget_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}/members"),
            path_params=[param[str]("budgetId", budget_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[PaginationResponseDtoBudgetMemberResponseDto],
            error_mapper=list_budget_members_error_mapper,
            request_options=request_options,
        )

    def list_budgets(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoBudgetResponseDto, ListBudgetsErrorBody]:
        """Get a list of budget objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            url_template=self._server.default("/v3/spend/budgets"),
            query_params=[
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[PaginationResponseDtoBudgetResponseDto],
            error_mapper=list_budgets_error_mapper,
            request_options=request_options,
        )

    def update_budget(
        self,
        budget_id: str,
        body: BudgetUpdateDto | BudgetUpdateDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetResponseDto, UpdateBudgetErrorBody]:
        """Update details about an existing budget.

        Args:
            budget_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}"),
            path_params=[param[str]("budgetId", budget_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetUpdateDto | BudgetUpdateDtoDict](body),
            decoder=json_decoder[BudgetResponseDto],
            error_mapper=update_budget_error_mapper,
            request_options=request_options,
        )

    def upsert_budget_member(
        self,
        budget_id: str,
        user_id: str,
        body: BudgetMemberUpsertRequestDto | BudgetMemberUpsertRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetMemberResponseDto, UpsertBudgetMemberErrorBody]:
        """Add a new user member to an existing budget. You can also update details about an existing user member
        assigned to the budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}/members/{userId}"),
            path_params=[param[str]("budgetId", budget_id), param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetMemberUpsertRequestDto | BudgetMemberUpsertRequestDtoDict](body),
            decoder=json_decoder[BudgetMemberResponseDto],
            error_mapper=upsert_budget_member_error_mapper,
            request_options=request_options,
        )

    def upsert_bulk_budget_users(
        self,
        budget_id: str,
        body: BudgetMemberBulkUpsertRequestDto | BudgetMemberBulkUpsertRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SpendStatusDto, UpsertBulkBudgetUsersErrorBody]:
        """Update details about multiple user members assigned to an existing budget.

        Args:
            budget_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}/members/bulk"),
            path_params=[param[str]("budgetId", budget_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetMemberBulkUpsertRequestDto | BudgetMemberBulkUpsertRequestDtoDict](body),
            decoder=json_decoder[SpendStatusDto],
            error_mapper=upsert_bulk_budget_users_error_mapper,
            request_options=request_options,
        )


class AsyncBudgetsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_budget(
        self,
        body: BudgetCreateDto | BudgetCreateDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetResponseDto, CreateBudgetErrorBody]:
        """Create a new budget for a company.

        See Budgets and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/budgets"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetCreateDto | BudgetCreateDtoDict](body),
            decoder=async_json_decoder[BudgetResponseDto],
            error_mapper=create_budget_error_mapper,
            request_options=request_options,
        )

    async def delete_budget(
        self, budget_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteBudgetErrorBody]:
        """Delete an existing budget. A deleted budget cannot be restored. The deleted budget is not available in the
        list of budgets.

        **Note**:
        * While you cannot restore a deleted budget with the API, you can unretire budgets in the BILL web app and
            mobile app. An unretired budget is active and is available for use.
        * A one-time budget can be unretired at any time. A ``recurringInterval`` budget can be unretired within one
            interval. For example, if a ``MONTHLY`` budget is retired in January, you can unretire it in February. You
            cannot unretire this budget in March or any later month.

        Args:
            budget_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}"),
            path_params=[param[str]("budgetId", budget_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_budget_error_mapper,
            request_options=request_options,
        )

    async def delete_budget_member(
        self,
        budget_id: str,
        user_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteBudgetMemberErrorBody]:
        """Delete a user member from an existing budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}/members/{userId}"),
            path_params=[param[str]("budgetId", budget_id), param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_budget_member_error_mapper,
            request_options=request_options,
        )

    async def get_budget(
        self, budget_id: str, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BudgetResponseDto, GetBudgetErrorBody]:
        """Get details about an existing budget.

        Args:
            budget_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}"),
            path_params=[param[str]("budgetId", budget_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[BudgetResponseDto],
            error_mapper=get_budget_error_mapper,
            request_options=request_options,
        )

    async def get_budget_member(
        self,
        budget_id: str,
        user_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetMemberResponseDto, GetBudgetMemberErrorBody]:
        """Get details about a user member assigned to an existing budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}/members/{userId}"),
            path_params=[param[str]("budgetId", budget_id), param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[BudgetMemberResponseDto],
            error_mapper=get_budget_member_error_mapper,
            request_options=request_options,
        )

    async def list_budget_members(
        self,
        budget_id: str,
        *,
        max_: int | None = None,
        next_page: str | None = None,
        prev_page: str | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoBudgetMemberResponseDto, ListBudgetMembersErrorBody]:
        """Get a list of user members assigned to an existing budget. By default, you get 20 results on one page of
        results. Set ``max`` in your request to get up to 100 results on one page.

        Args:
            budget_id: Value sent with the request.
            max_: Value sent with the request.
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}/members"),
            path_params=[param[str]("budgetId", budget_id)],
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[PaginationResponseDtoBudgetMemberResponseDto],
            error_mapper=list_budget_members_error_mapper,
            request_options=request_options,
        )

    async def list_budgets(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoBudgetResponseDto, ListBudgetsErrorBody]:
        """Get a list of budget objects. By default, you get 20 results on one page of results. Set ``max`` in your
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
            url_template=self._server.default("/v3/spend/budgets"),
            query_params=[
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[PaginationResponseDtoBudgetResponseDto],
            error_mapper=list_budgets_error_mapper,
            request_options=request_options,
        )

    async def update_budget(
        self,
        budget_id: str,
        body: BudgetUpdateDto | BudgetUpdateDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetResponseDto, UpdateBudgetErrorBody]:
        """Update details about an existing budget.

        Args:
            budget_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}"),
            path_params=[param[str]("budgetId", budget_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetUpdateDto | BudgetUpdateDtoDict](body),
            decoder=async_json_decoder[BudgetResponseDto],
            error_mapper=update_budget_error_mapper,
            request_options=request_options,
        )

    async def upsert_budget_member(
        self,
        budget_id: str,
        user_id: str,
        body: BudgetMemberUpsertRequestDto | BudgetMemberUpsertRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BudgetMemberResponseDto, UpsertBudgetMemberErrorBody]:
        """Add a new user member to an existing budget. You can also update details about an existing user member
        assigned to the budget.

        Args:
            budget_id: Value sent with the request.
            user_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}/members/{userId}"),
            path_params=[param[str]("budgetId", budget_id), param[str]("userId", user_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetMemberUpsertRequestDto | BudgetMemberUpsertRequestDtoDict](body),
            decoder=async_json_decoder[BudgetMemberResponseDto],
            error_mapper=upsert_budget_member_error_mapper,
            request_options=request_options,
        )

    async def upsert_bulk_budget_users(
        self,
        budget_id: str,
        body: BudgetMemberBulkUpsertRequestDto | BudgetMemberBulkUpsertRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SpendStatusDto, UpsertBulkBudgetUsersErrorBody]:
        """Update details about multiple user members assigned to an existing budget.

        Args:
            budget_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/spend/budgets/{budgetId}/members/bulk"),
            path_params=[param[str]("budgetId", budget_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BudgetMemberBulkUpsertRequestDto | BudgetMemberBulkUpsertRequestDtoDict](body),
            decoder=async_json_decoder[SpendStatusDto],
            error_mapper=upsert_bulk_budget_users_error_mapper,
            request_options=request_options,
        )
