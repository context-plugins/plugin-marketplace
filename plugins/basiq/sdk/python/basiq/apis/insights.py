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
from ..errors.create_insight_error import CreateInsightErrorBody, create_insight_error_mapper
from ..errors.get_account_insights_error import GetAccountInsightsErrorBody, get_account_insights_error_mapper
from ..errors.get_balance_insights_error import GetBalanceInsightsErrorBody, get_balance_insights_error_mapper
from ..errors.get_expense_ratio_insights_error import (
    GetExpenseRatioInsightsErrorBody,
    get_expense_ratio_insights_error_mapper,
)
from ..errors.get_identity_insights_error import GetIdentityInsightsErrorBody, get_identity_insights_error_mapper
from ..errors.get_insight_by_id_error import GetInsightByIdErrorBody, get_insight_by_id_error_mapper
from ..errors.get_insight_type_error import GetInsightTypeErrorBody, get_insight_type_error_mapper
from ..errors.get_insight_types_error import GetInsightTypesErrorBody, get_insight_types_error_mapper
from ..errors.list_user_insights_error import ListUserInsightsErrorBody, list_user_insights_error_mapper
from ..errors.verify_income_insight_error import VerifyIncomeInsightErrorBody, verify_income_insight_error_mapper
from ..models.account_insight_response import AccountInsightResponse
from ..models.balance_insight_request import BalanceInsightRequest, BalanceInsightRequestDict
from ..models.balance_insight_response import BalanceInsightResponse
from ..models.enums.type_id import TypeIdOrStr
from ..models.expense_ratio_insight_request import ExpenseRatioInsightRequest, ExpenseRatioInsightRequestDict
from ..models.expense_ratio_insight_response import ExpenseRatioInsightResponse
from ..models.identity_insight_request import IdentityInsightRequest, IdentityInsightRequestDict
from ..models.identity_insight_response import IdentityInsightResponse
from ..models.income_insight_request import IncomeInsightRequest, IncomeInsightRequestDict
from ..models.income_insight_response import IncomeInsightResponse
from ..models.insight import Insight
from ..models.insight_list_response import InsightListResponse
from ..models.insight_type_item import InsightTypeItem
from ..models.insight_types_list import InsightTypesList
from ..models.post_insights_request import PostInsightsRequest, PostInsightsRequestDict
from ..models.post_insights_response import PostInsightsResponse
from ..models.users_insights_account_request import UsersInsightsAccountRequest, UsersInsightsAccountRequestDict
from ..server.server import Server


class Insights:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InsightsWithRawResponse(client, server, auth)

    def create_insight(
        self,
        body: PostInsightsRequest | PostInsightsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostInsightsResponse:
        """Creates a new insight for one or more users. Supported insight types are EXPENSE_RATIO_VERIFICATION,
        BALANCE_VERIFICATION, ACCOUNT_VERIFICATION, IDENTITY_VERIFICATION, and INCOME_VERIFICATION. Multi-user requests
        (1–10 users) are currently supported only for EXPENSE_RATIO_VERIFICATION.A single insight object is created
        referencing all users. The self link in the response uses the first userId from the users array.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created insight

        Raises:
            ApiError: Bad Request - Invalid request parameters Unauthorized - Invalid or missing authentication token
                Forbidden - Insufficient authorization scopes One or more users not found or no active consent Internal
                Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_insight(body, request_options=request_options))

    def get_account_insights(
        self,
        user_id: UUID,
        body: UsersInsightsAccountRequest | UsersInsightsAccountRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AccountInsightResponse:
        """Retrieve account insights for a specific user based on account number

        Args:
            user_id: The unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved account insights

        Raises:
            ApiError: Bad request - invalid input parameters Unauthorized - invalid or missing authentication User not
                found Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_account_insights(user_id, body, request_options=request_options))

    def get_balance_insights(
        self,
        user_id: UUID,
        body: BalanceInsightRequest | BalanceInsightRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BalanceInsightResponse:
        """Retrieve balance insights for a user's accounts based on specified minimum and maximum balance criteria

        Args:
            user_id: Unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved balance insights

        Raises:
            ApiError: Bad Request - Invalid input parameters Unauthorized - invalid or missing authentication User not
                found Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_balance_insights(user_id, body, request_options=request_options))

    def get_expense_ratio_insights(
        self,
        user_id: UUID,
        body: ExpenseRatioInsightRequest | ExpenseRatioInsightRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExpenseRatioInsightResponse:
        """Calculate and return the expense-to-income ratio.

        Args:
            user_id: The unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved expense ratio insights

        Raises:
            ApiError: Bad Request - Invalid request parameters Unauthorized - Invalid or missing authentication token
                Forbidden - Insufficient authorization scopes User not found or no active consent Internal Server Error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_expense_ratio_insights(user_id, body, request_options=request_options)
        )

    def get_identity_insights(
        self,
        user_id: UUID,
        body: IdentityInsightRequest | IdentityInsightRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IdentityInsightResponse:
        """Retrieve identity insights for a specific user by comparing provided personal details (name, phone, email,
        address).

        Args:
            user_id: Unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved identity insights

        Raises:
            ApiError: Bad Request - Invalid input parameters Unauthorized - invalid or missing authentication User not
                found Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_identity_insights(user_id, body, request_options=request_options))

    def get_insight_by_id(
        self, user_id: UUID, insight_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> Insight:
        """Returns detailed information for a specific insight by ID

        Args:
            user_id: The unique identifier of the user
            insight_id: The unique identifier of the insight (must be valid UUID format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with insight details

        Raises:
            ApiError: Bad Request - Invalid insight ID format Unauthorized - Invalid or missing authentication token
                User or insight not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_insight_by_id(user_id, insight_id, request_options=request_options))

    def get_insight_type(
        self, type_id: TypeIdOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> InsightTypeItem:
        """Returns the definition of a single supported CDR Insight type identified by ``{typeId}``.

        Args:
            type_id: The Insight type identifier. Must be one of the supported enum values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved Insight type definition

        Raises:
            ApiError: Unauthorized – missing or invalid token Forbidden – insufficient permissions Not Found – the
                specified ``typeId`` does not match a known Insight type ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_insight_type(type_id, request_options=request_options))

    def get_insight_types(self, *, request_options: RequestOptionsOrDict | None = None) -> InsightTypesList:
        """Returns the list of supported CDR Insight types and the Insight-specific input schema (``data``) each type
        expects.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of supported Insight types

        Raises:
            ApiError: Unauthorized – missing or invalid token Forbidden – insufficient permissions ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_insight_types(request_options=request_options))

    def list_user_insights(
        self, user_id: UUID, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> InsightListResponse:
        """Returns a paginated list of previously generated insights for the specified user. Supports filtering by
        creation date and insight type. Maximum 20 insights per page.

        Args:
            user_id: The unique identifier of the user
            filter_: Filter parameter supporting multiple filter fields separated by commas. Supported fields: 'created'
                (date in YYYY-MM-DD format) and 'insightType' (account, balance, identity, income, expense-ratio).
                Operators: gteq (>=), lteq (<=), gt (>), lt (<), eq (=), bt (between two dates). Examples:
                'created.gteq('2025-06-16')', 'created.bt('2025-08-25','2025-09-02')', 'insightType.eq('account')',
                'created.bt('2025-06-01','2025-08-30'),insightType.eq('balance')'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with list of insights

        Raises:
            ApiError: Bad Request - Invalid filter parameters or request content Unauthorized - Invalid or missing
                authentication token User not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_user_insights(user_id, filter_=filter_, request_options=request_options)
        )

    def verify_income_insight(
        self,
        user_id: UUID,
        body: IncomeInsightRequest | IncomeInsightRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IncomeInsightResponse:
        """Verifies if a user's income falls within a specified range. Returns a match result with confidence level
        based on the user's financial data.

        Args:
            user_id: The unique identifier of the user
            body: Income range to verify against user's financial data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Income insight successfully verified

        Raises:
            ApiError: Bad Request - Invalid parameters or request format Unauthorized - Invalid or missing
                authentication token User not found or no active consent ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.verify_income_insight(user_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> InsightsWithRawResponse:
        return self._with_raw_response


class AsyncInsights:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInsightsWithRawResponse(client, server, auth)

    async def create_insight(
        self,
        body: PostInsightsRequest | PostInsightsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostInsightsResponse:
        """Creates a new insight for one or more users. Supported insight types are EXPENSE_RATIO_VERIFICATION,
        BALANCE_VERIFICATION, ACCOUNT_VERIFICATION, IDENTITY_VERIFICATION, and INCOME_VERIFICATION. Multi-user requests
        (1–10 users) are currently supported only for EXPENSE_RATIO_VERIFICATION.A single insight object is created
        referencing all users. The self link in the response uses the first userId from the users array.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully created insight

        Raises:
            ApiError: Bad Request - Invalid request parameters Unauthorized - Invalid or missing authentication token
                Forbidden - Insufficient authorization scopes One or more users not found or no active consent Internal
                Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_insight(body, request_options=request_options))

    async def get_account_insights(
        self,
        user_id: UUID,
        body: UsersInsightsAccountRequest | UsersInsightsAccountRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AccountInsightResponse:
        """Retrieve account insights for a specific user based on account number

        Args:
            user_id: The unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved account insights

        Raises:
            ApiError: Bad request - invalid input parameters Unauthorized - invalid or missing authentication User not
                found Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_account_insights(user_id, body, request_options=request_options)
        )

    async def get_balance_insights(
        self,
        user_id: UUID,
        body: BalanceInsightRequest | BalanceInsightRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BalanceInsightResponse:
        """Retrieve balance insights for a user's accounts based on specified minimum and maximum balance criteria

        Args:
            user_id: Unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved balance insights

        Raises:
            ApiError: Bad Request - Invalid input parameters Unauthorized - invalid or missing authentication User not
                found Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_balance_insights(user_id, body, request_options=request_options)
        )

    async def get_expense_ratio_insights(
        self,
        user_id: UUID,
        body: ExpenseRatioInsightRequest | ExpenseRatioInsightRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExpenseRatioInsightResponse:
        """Calculate and return the expense-to-income ratio.

        Args:
            user_id: The unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved expense ratio insights

        Raises:
            ApiError: Bad Request - Invalid request parameters Unauthorized - Invalid or missing authentication token
                Forbidden - Insufficient authorization scopes User not found or no active consent Internal Server Error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_expense_ratio_insights(user_id, body, request_options=request_options)
        )

    async def get_identity_insights(
        self,
        user_id: UUID,
        body: IdentityInsightRequest | IdentityInsightRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IdentityInsightResponse:
        """Retrieve identity insights for a specific user by comparing provided personal details (name, phone, email,
        address).

        Args:
            user_id: Unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved identity insights

        Raises:
            ApiError: Bad Request - Invalid input parameters Unauthorized - invalid or missing authentication User not
                found Internal server error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_identity_insights(user_id, body, request_options=request_options)
        )

    async def get_insight_by_id(
        self, user_id: UUID, insight_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Insight:
        """Returns detailed information for a specific insight by ID

        Args:
            user_id: The unique identifier of the user
            insight_id: The unique identifier of the insight (must be valid UUID format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with insight details

        Raises:
            ApiError: Bad Request - Invalid insight ID format Unauthorized - Invalid or missing authentication token
                User or insight not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_insight_by_id(user_id, insight_id, request_options=request_options)
        )

    async def get_insight_type(
        self, type_id: TypeIdOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> InsightTypeItem:
        """Returns the definition of a single supported CDR Insight type identified by ``{typeId}``.

        Args:
            type_id: The Insight type identifier. Must be one of the supported enum values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved Insight type definition

        Raises:
            ApiError: Unauthorized – missing or invalid token Forbidden – insufficient permissions Not Found – the
                specified ``typeId`` does not match a known Insight type ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_insight_type(type_id, request_options=request_options))

    async def get_insight_types(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> InsightTypesList:
        """Returns the list of supported CDR Insight types and the Insight-specific input schema (``data``) each type
        expects.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of supported Insight types

        Raises:
            ApiError: Unauthorized – missing or invalid token Forbidden – insufficient permissions ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_insight_types(request_options=request_options))

    async def list_user_insights(
        self, user_id: UUID, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> InsightListResponse:
        """Returns a paginated list of previously generated insights for the specified user. Supports filtering by
        creation date and insight type. Maximum 20 insights per page.

        Args:
            user_id: The unique identifier of the user
            filter_: Filter parameter supporting multiple filter fields separated by commas. Supported fields: 'created'
                (date in YYYY-MM-DD format) and 'insightType' (account, balance, identity, income, expense-ratio).
                Operators: gteq (>=), lteq (<=), gt (>), lt (<), eq (=), bt (between two dates). Examples:
                'created.gteq('2025-06-16')', 'created.bt('2025-08-25','2025-09-02')', 'insightType.eq('account')',
                'created.bt('2025-06-01','2025-08-30'),insightType.eq('balance')'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response with list of insights

        Raises:
            ApiError: Bad Request - Invalid filter parameters or request content Unauthorized - Invalid or missing
                authentication token User not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_user_insights(user_id, filter_=filter_, request_options=request_options)
        )

    async def verify_income_insight(
        self,
        user_id: UUID,
        body: IncomeInsightRequest | IncomeInsightRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IncomeInsightResponse:
        """Verifies if a user's income falls within a specified range. Returns a match result with confidence level
        based on the user's financial data.

        Args:
            user_id: The unique identifier of the user
            body: Income range to verify against user's financial data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Income insight successfully verified

        Raises:
            ApiError: Bad Request - Invalid parameters or request format Unauthorized - Invalid or missing
                authentication token User not found or no active consent ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.verify_income_insight(user_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncInsightsWithRawResponse:
        return self._with_raw_response


class InsightsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_insight(
        self,
        body: PostInsightsRequest | PostInsightsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostInsightsResponse, CreateInsightErrorBody]:
        """Creates a new insight for one or more users. Supported insight types are EXPENSE_RATIO_VERIFICATION,
        BALANCE_VERIFICATION, ACCOUNT_VERIFICATION, IDENTITY_VERIFICATION, and INCOME_VERIFICATION. Multi-user requests
        (1–10 users) are currently supported only for EXPENSE_RATIO_VERIFICATION.A single insight object is created
        referencing all users. The self link in the response uses the first userId from the users array.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/insights"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PostInsightsRequest | PostInsightsRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[PostInsightsResponse],
            error_mapper=create_insight_error_mapper,
            request_options=request_options,
        )

    def get_account_insights(
        self,
        user_id: UUID,
        body: UsersInsightsAccountRequest | UsersInsightsAccountRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AccountInsightResponse, GetAccountInsightsErrorBody]:
        """Retrieve account insights for a specific user based on account number

        Args:
            user_id: The unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/insights/account"),
            path_params=[param[UUID]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersInsightsAccountRequest | UsersInsightsAccountRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[AccountInsightResponse],
            error_mapper=get_account_insights_error_mapper,
            request_options=request_options,
        )

    def get_balance_insights(
        self,
        user_id: UUID,
        body: BalanceInsightRequest | BalanceInsightRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BalanceInsightResponse, GetBalanceInsightsErrorBody]:
        """Retrieve balance insights for a user's accounts based on specified minimum and maximum balance criteria

        Args:
            user_id: Unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/insights/balance"),
            path_params=[param[UUID]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BalanceInsightRequest | BalanceInsightRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[BalanceInsightResponse],
            error_mapper=get_balance_insights_error_mapper,
            request_options=request_options,
        )

    def get_expense_ratio_insights(
        self,
        user_id: UUID,
        body: ExpenseRatioInsightRequest | ExpenseRatioInsightRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExpenseRatioInsightResponse, GetExpenseRatioInsightsErrorBody]:
        """Calculate and return the expense-to-income ratio.

        Args:
            user_id: The unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/insights/expense-ratio"),
            path_params=[param[UUID]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExpenseRatioInsightRequest | ExpenseRatioInsightRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ExpenseRatioInsightResponse],
            error_mapper=get_expense_ratio_insights_error_mapper,
            request_options=request_options,
        )

    def get_identity_insights(
        self,
        user_id: UUID,
        body: IdentityInsightRequest | IdentityInsightRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IdentityInsightResponse, GetIdentityInsightsErrorBody]:
        """Retrieve identity insights for a specific user by comparing provided personal details (name, phone, email,
        address).

        Args:
            user_id: Unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/insights/identity"),
            path_params=[param[UUID]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IdentityInsightRequest | IdentityInsightRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[IdentityInsightResponse],
            error_mapper=get_identity_insights_error_mapper,
            request_options=request_options,
        )

    def get_insight_by_id(
        self, user_id: UUID, insight_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Insight, GetInsightByIdErrorBody]:
        """Returns detailed information for a specific insight by ID

        Args:
            user_id: The unique identifier of the user
            insight_id: The unique identifier of the insight (must be valid UUID format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/insights/{insightId}"),
            path_params=[param[UUID]("userId", user_id), param[UUID]("insightId", insight_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[Insight],
            error_mapper=get_insight_by_id_error_mapper,
            request_options=request_options,
        )

    def get_insight_type(
        self, type_id: TypeIdOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[InsightTypeItem, GetInsightTypeErrorBody]:
        """Returns the definition of a single supported CDR Insight type identified by ``{typeId}``.

        Args:
            type_id: The Insight type identifier. Must be one of the supported enum values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/types/{typeId}"),
            path_params=[param[TypeIdOrStr]("typeId", type_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[InsightTypeItem],
            error_mapper=get_insight_type_error_mapper,
            request_options=request_options,
        )

    def get_insight_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[InsightTypesList, GetInsightTypesErrorBody]:
        """Returns the list of supported CDR Insight types and the Insight-specific input schema (``data``) each type
        expects.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/types"),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[InsightTypesList],
            error_mapper=get_insight_types_error_mapper,
            request_options=request_options,
        )

    def list_user_insights(
        self, user_id: UUID, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[InsightListResponse, ListUserInsightsErrorBody]:
        """Returns a paginated list of previously generated insights for the specified user. Supports filtering by
        creation date and insight type. Maximum 20 insights per page.

        Args:
            user_id: The unique identifier of the user
            filter_: Filter parameter supporting multiple filter fields separated by commas. Supported fields: 'created'
                (date in YYYY-MM-DD format) and 'insightType' (account, balance, identity, income, expense-ratio).
                Operators: gteq (>=), lteq (<=), gt (>), lt (<), eq (=), bt (between two dates). Examples:
                'created.gteq('2025-06-16')', 'created.bt('2025-08-25','2025-09-02')', 'insightType.eq('account')',
                'created.bt('2025-06-01','2025-08-30'),insightType.eq('balance')'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/insights"),
            path_params=[param[UUID]("userId", user_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[InsightListResponse],
            error_mapper=list_user_insights_error_mapper,
            request_options=request_options,
        )

    def verify_income_insight(
        self,
        user_id: UUID,
        body: IncomeInsightRequest | IncomeInsightRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IncomeInsightResponse, VerifyIncomeInsightErrorBody]:
        """Verifies if a user's income falls within a specified range. Returns a match result with confidence level
        based on the user's financial data.

        Args:
            user_id: The unique identifier of the user
            body: Income range to verify against user's financial data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/insights/income"),
            path_params=[param[UUID]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IncomeInsightRequest | IncomeInsightRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[IncomeInsightResponse],
            error_mapper=verify_income_insight_error_mapper,
            request_options=request_options,
        )


class AsyncInsightsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_insight(
        self,
        body: PostInsightsRequest | PostInsightsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostInsightsResponse, CreateInsightErrorBody]:
        """Creates a new insight for one or more users. Supported insight types are EXPENSE_RATIO_VERIFICATION,
        BALANCE_VERIFICATION, ACCOUNT_VERIFICATION, IDENTITY_VERIFICATION, and INCOME_VERIFICATION. Multi-user requests
        (1–10 users) are currently supported only for EXPENSE_RATIO_VERIFICATION.A single insight object is created
        referencing all users. The self link in the response uses the first userId from the users array.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/insights"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PostInsightsRequest | PostInsightsRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[PostInsightsResponse],
            error_mapper=create_insight_error_mapper,
            request_options=request_options,
        )

    async def get_account_insights(
        self,
        user_id: UUID,
        body: UsersInsightsAccountRequest | UsersInsightsAccountRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AccountInsightResponse, GetAccountInsightsErrorBody]:
        """Retrieve account insights for a specific user based on account number

        Args:
            user_id: The unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/insights/account"),
            path_params=[param[UUID]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UsersInsightsAccountRequest | UsersInsightsAccountRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[AccountInsightResponse],
            error_mapper=get_account_insights_error_mapper,
            request_options=request_options,
        )

    async def get_balance_insights(
        self,
        user_id: UUID,
        body: BalanceInsightRequest | BalanceInsightRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BalanceInsightResponse, GetBalanceInsightsErrorBody]:
        """Retrieve balance insights for a user's accounts based on specified minimum and maximum balance criteria

        Args:
            user_id: Unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/insights/balance"),
            path_params=[param[UUID]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BalanceInsightRequest | BalanceInsightRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[BalanceInsightResponse],
            error_mapper=get_balance_insights_error_mapper,
            request_options=request_options,
        )

    async def get_expense_ratio_insights(
        self,
        user_id: UUID,
        body: ExpenseRatioInsightRequest | ExpenseRatioInsightRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExpenseRatioInsightResponse, GetExpenseRatioInsightsErrorBody]:
        """Calculate and return the expense-to-income ratio.

        Args:
            user_id: The unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/insights/expense-ratio"),
            path_params=[param[UUID]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExpenseRatioInsightRequest | ExpenseRatioInsightRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ExpenseRatioInsightResponse],
            error_mapper=get_expense_ratio_insights_error_mapper,
            request_options=request_options,
        )

    async def get_identity_insights(
        self,
        user_id: UUID,
        body: IdentityInsightRequest | IdentityInsightRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IdentityInsightResponse, GetIdentityInsightsErrorBody]:
        """Retrieve identity insights for a specific user by comparing provided personal details (name, phone, email,
        address).

        Args:
            user_id: Unique identifier for the user
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/insights/identity"),
            path_params=[param[UUID]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IdentityInsightRequest | IdentityInsightRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[IdentityInsightResponse],
            error_mapper=get_identity_insights_error_mapper,
            request_options=request_options,
        )

    async def get_insight_by_id(
        self, user_id: UUID, insight_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Insight, GetInsightByIdErrorBody]:
        """Returns detailed information for a specific insight by ID

        Args:
            user_id: The unique identifier of the user
            insight_id: The unique identifier of the insight (must be valid UUID format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/insights/{insightId}"),
            path_params=[param[UUID]("userId", user_id), param[UUID]("insightId", insight_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[Insight],
            error_mapper=get_insight_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_insight_type(
        self, type_id: TypeIdOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[InsightTypeItem, GetInsightTypeErrorBody]:
        """Returns the definition of a single supported CDR Insight type identified by ``{typeId}``.

        Args:
            type_id: The Insight type identifier. Must be one of the supported enum values.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/types/{typeId}"),
            path_params=[param[TypeIdOrStr]("typeId", type_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[InsightTypeItem],
            error_mapper=get_insight_type_error_mapper,
            request_options=request_options,
        )

    async def get_insight_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[InsightTypesList, GetInsightTypesErrorBody]:
        """Returns the list of supported CDR Insight types and the Insight-specific input schema (``data``) each type
        expects.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/insights/types"),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[InsightTypesList],
            error_mapper=get_insight_types_error_mapper,
            request_options=request_options,
        )

    async def list_user_insights(
        self, user_id: UUID, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[InsightListResponse, ListUserInsightsErrorBody]:
        """Returns a paginated list of previously generated insights for the specified user. Supports filtering by
        creation date and insight type. Maximum 20 insights per page.

        Args:
            user_id: The unique identifier of the user
            filter_: Filter parameter supporting multiple filter fields separated by commas. Supported fields: 'created'
                (date in YYYY-MM-DD format) and 'insightType' (account, balance, identity, income, expense-ratio).
                Operators: gteq (>=), lteq (<=), gt (>), lt (<), eq (=), bt (between two dates). Examples:
                'created.gteq('2025-06-16')', 'created.bt('2025-08-25','2025-09-02')', 'insightType.eq('account')',
                'created.bt('2025-06-01','2025-08-30'),insightType.eq('balance')'
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/insights"),
            path_params=[param[UUID]("userId", user_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[InsightListResponse],
            error_mapper=list_user_insights_error_mapper,
            request_options=request_options,
        )

    async def verify_income_insight(
        self,
        user_id: UUID,
        body: IncomeInsightRequest | IncomeInsightRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IncomeInsightResponse, VerifyIncomeInsightErrorBody]:
        """Verifies if a user's income falls within a specified range. Returns a match result with confidence level
        based on the user's financial data.

        Args:
            user_id: The unique identifier of the user
            body: Income range to verify against user's financial data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/users/{userId}/insights/income"),
            path_params=[param[UUID]("userId", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IncomeInsightRequest | IncomeInsightRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[IncomeInsightResponse],
            error_mapper=verify_income_insight_error_mapper,
            request_options=request_options,
        )
