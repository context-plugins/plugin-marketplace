from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.numbers_risk_checks_create_error import (
    NumbersRiskChecksCreateErrorBody,
    numbers_risk_checks_create_error_mapper,
)
from ..errors.numbers_risk_checks_index_error import (
    NumbersRiskChecksIndexErrorBody,
    numbers_risk_checks_index_error_mapper,
)
from ..errors.numbers_risk_checks_logs_error import (
    NumbersRiskChecksLogsErrorBody,
    numbers_risk_checks_logs_error_mapper,
)
from ..models.api_v2_numbers_risk_checks_logs_response import ApiV2NumbersRiskChecksLogsResponse
from ..models.api_v2_numbers_risk_checks_request import ApiV2NumbersRiskChecksRequest, ApiV2NumbersRiskChecksRequestDict
from ..models.api_v2_numbers_risk_checks_response import ApiV2NumbersRiskChecksResponse
from ..models.api_v2_numbers_risk_checks_response1 import ApiV2NumbersRiskChecksResponse1
from ..models.enums.order import Order, OrderOrStr
from ..models.enums.risk_level import RiskLevelOrStr
from ..models.enums.status_didlogic_com_risk_checks_api import StatusDidlogicComRiskChecksApiOrStr
from ..server.server import Server


class RiskChecks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RiskChecksWithRawResponse(client, server, auth)

    def numbers_risk_checks_create(
        self,
        body: ApiV2NumbersRiskChecksRequest | ApiV2NumbersRiskChecksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersRiskChecksResponse1:
        """Creates a new risk check task for the provided phone numbers (maximum 1500 numbers per request).

        ``risk_check_request.task_id`` feeds numbers_risk_checks_index and numbers_risk_checks_logs (``task_ids``): the
        task status and the per-number results.

        **Note:** Results are informational only. Use at your own discretion.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns created risk check task

        Raises:
            ApiError: returns unauthorized for without authentication returns forbidden for without access to risk
                checks returns unprocessable entity when another risk check is already running ``error`` is
                ``ApiV2NumbersRiskChecks401Error1 | ApiV2NumbersRiskChecks403Error1 | ApiV2NumbersRiskChecksResponse21 |
                RawError``."""
        return unwrap(self._with_raw_response.numbers_risk_checks_create(body, request_options=request_options))

    def numbers_risk_checks_index(
        self,
        *,
        task_ids: str | None = None,
        status: StatusDidlogicComRiskChecksApiOrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersRiskChecksResponse:
        """Retrieves a list of risk check tasks.

        Returns information about all risk check tasks created by your organization, including task status, number
        counts, and processing timestamps. Supports filtering by various criteria and pagination.

        ``tasks[].id`` feeds numbers_risk_checks_logs (``task_ids``). Rows: numbers_risk_checks_logs.

        Args:
            task_ids: Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_logs
            status: Filter by status
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns risk check tasks

        Raises:
            ApiError: returns unauthorized for without authentication returns forbidden for without access to risk
                checks ``error`` is ``ApiV2NumbersRiskChecks401Error1 | ApiV2NumbersRiskChecks403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.numbers_risk_checks_index(
                task_ids=task_ids,
                status=status,
                created_at_from=created_at_from,
                created_at_to=created_at_to,
                processed_at_from=processed_at_from,
                processed_at_to=processed_at_to,
                order_by=order_by,
                order=order,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    def numbers_risk_checks_logs(
        self,
        *,
        ids: str | None = None,
        task_ids: int | None = None,
        number: str | None = None,
        status: StatusDidlogicComRiskChecksApiOrStr | None = None,
        risk_level: RiskLevelOrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersRiskChecksLogsResponse:
        """Retrieves risk check logs for individual phone numbers.

        Returns detailed information about each number that was checked, including its risk level, status, and
        processing time. Supports filtering by various criteria and pagination.

        ``logs[].task_id`` feeds numbers_risk_checks_index (``task_ids``).

        Args:
            ids: Filter logs by log IDs (comma-separated)
            task_ids: Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_index
            number: Filter logs by specific phone numbers (comma-separated)
            status: Filter by status
            risk_level: Filter logs by risk level
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns risk check logs

        Raises:
            ApiError: returns unauthorized for without authentication returns forbidden for without access to risk
                checks ``error`` is ``ApiV2NumbersRiskChecksLogs401Error1 | ApiV2NumbersRiskChecksLogs403Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.numbers_risk_checks_logs(
                ids=ids,
                task_ids=task_ids,
                number=number,
                status=status,
                risk_level=risk_level,
                created_at_from=created_at_from,
                created_at_to=created_at_to,
                processed_at_from=processed_at_from,
                processed_at_to=processed_at_to,
                order_by=order_by,
                order=order,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> RiskChecksWithRawResponse:
        return self._with_raw_response


class AsyncRiskChecks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRiskChecksWithRawResponse(client, server, auth)

    async def numbers_risk_checks_create(
        self,
        body: ApiV2NumbersRiskChecksRequest | ApiV2NumbersRiskChecksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersRiskChecksResponse1:
        """Creates a new risk check task for the provided phone numbers (maximum 1500 numbers per request).

        ``risk_check_request.task_id`` feeds numbers_risk_checks_index and numbers_risk_checks_logs (``task_ids``): the
        task status and the per-number results.

        **Note:** Results are informational only. Use at your own discretion.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns created risk check task

        Raises:
            ApiError: returns unauthorized for without authentication returns forbidden for without access to risk
                checks returns unprocessable entity when another risk check is already running ``error`` is
                ``ApiV2NumbersRiskChecks401Error1 | ApiV2NumbersRiskChecks403Error1 | ApiV2NumbersRiskChecksResponse21 |
                RawError``."""
        return unwrap(await self._with_raw_response.numbers_risk_checks_create(body, request_options=request_options))

    async def numbers_risk_checks_index(
        self,
        *,
        task_ids: str | None = None,
        status: StatusDidlogicComRiskChecksApiOrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersRiskChecksResponse:
        """Retrieves a list of risk check tasks.

        Returns information about all risk check tasks created by your organization, including task status, number
        counts, and processing timestamps. Supports filtering by various criteria and pagination.

        ``tasks[].id`` feeds numbers_risk_checks_logs (``task_ids``). Rows: numbers_risk_checks_logs.

        Args:
            task_ids: Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_logs
            status: Filter by status
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns risk check tasks

        Raises:
            ApiError: returns unauthorized for without authentication returns forbidden for without access to risk
                checks ``error`` is ``ApiV2NumbersRiskChecks401Error1 | ApiV2NumbersRiskChecks403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.numbers_risk_checks_index(
                task_ids=task_ids,
                status=status,
                created_at_from=created_at_from,
                created_at_to=created_at_to,
                processed_at_from=processed_at_from,
                processed_at_to=processed_at_to,
                order_by=order_by,
                order=order,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    async def numbers_risk_checks_logs(
        self,
        *,
        ids: str | None = None,
        task_ids: int | None = None,
        number: str | None = None,
        status: StatusDidlogicComRiskChecksApiOrStr | None = None,
        risk_level: RiskLevelOrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersRiskChecksLogsResponse:
        """Retrieves risk check logs for individual phone numbers.

        Returns detailed information about each number that was checked, including its risk level, status, and
        processing time. Supports filtering by various criteria and pagination.

        ``logs[].task_id`` feeds numbers_risk_checks_index (``task_ids``).

        Args:
            ids: Filter logs by log IDs (comma-separated)
            task_ids: Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_index
            number: Filter logs by specific phone numbers (comma-separated)
            status: Filter by status
            risk_level: Filter logs by risk level
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns risk check logs

        Raises:
            ApiError: returns unauthorized for without authentication returns forbidden for without access to risk
                checks ``error`` is ``ApiV2NumbersRiskChecksLogs401Error1 | ApiV2NumbersRiskChecksLogs403Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.numbers_risk_checks_logs(
                ids=ids,
                task_ids=task_ids,
                number=number,
                status=status,
                risk_level=risk_level,
                created_at_from=created_at_from,
                created_at_to=created_at_to,
                processed_at_from=processed_at_from,
                processed_at_to=processed_at_to,
                order_by=order_by,
                order=order,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRiskChecksWithRawResponse:
        return self._with_raw_response


class RiskChecksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def numbers_risk_checks_create(
        self,
        body: ApiV2NumbersRiskChecksRequest | ApiV2NumbersRiskChecksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersRiskChecksResponse1, NumbersRiskChecksCreateErrorBody]:
        """Creates a new risk check task for the provided phone numbers (maximum 1500 numbers per request).

        ``risk_check_request.task_id`` feeds numbers_risk_checks_index and numbers_risk_checks_logs (``task_ids``): the
        task status and the per-number results.

        **Note:** Results are informational only. Use at your own discretion.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/numbers/risk_checks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2NumbersRiskChecksRequest | ApiV2NumbersRiskChecksRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersRiskChecksResponse1],
            error_mapper=numbers_risk_checks_create_error_mapper,
            request_options=request_options,
        )

    def numbers_risk_checks_index(
        self,
        *,
        task_ids: str | None = None,
        status: StatusDidlogicComRiskChecksApiOrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersRiskChecksResponse, NumbersRiskChecksIndexErrorBody]:
        """Retrieves a list of risk check tasks.

        Returns information about all risk check tasks created by your organization, including task status, number
        counts, and processing timestamps. Supports filtering by various criteria and pagination.

        ``tasks[].id`` feeds numbers_risk_checks_logs (``task_ids``). Rows: numbers_risk_checks_logs.

        Args:
            task_ids: Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_logs
            status: Filter by status
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/risk_checks"),
            query_params=[
                param[str | None]("task_ids", task_ids),
                param[StatusDidlogicComRiskChecksApiOrStr | None]("status", status),
                param[Date | None]("created_at_from", created_at_from),
                param[Date | None]("created_at_to", created_at_to),
                param[Date | None]("processed_at_from", processed_at_from),
                param[Date | None]("processed_at_to", processed_at_to),
                param[str | None]("order_by", order_by),
                param[OrderOrStr | None]("order", order),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersRiskChecksResponse],
            error_mapper=numbers_risk_checks_index_error_mapper,
            request_options=request_options,
        )

    def numbers_risk_checks_logs(
        self,
        *,
        ids: str | None = None,
        task_ids: int | None = None,
        number: str | None = None,
        status: StatusDidlogicComRiskChecksApiOrStr | None = None,
        risk_level: RiskLevelOrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersRiskChecksLogsResponse, NumbersRiskChecksLogsErrorBody]:
        """Retrieves risk check logs for individual phone numbers.

        Returns detailed information about each number that was checked, including its risk level, status, and
        processing time. Supports filtering by various criteria and pagination.

        ``logs[].task_id`` feeds numbers_risk_checks_index (``task_ids``).

        Args:
            ids: Filter logs by log IDs (comma-separated)
            task_ids: Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_index
            number: Filter logs by specific phone numbers (comma-separated)
            status: Filter by status
            risk_level: Filter logs by risk level
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/risk_checks/logs"),
            query_params=[
                param[str | None]("ids", ids),
                param[int | None]("task_ids", task_ids),
                param[str | None]("number", number),
                param[StatusDidlogicComRiskChecksApiOrStr | None]("status", status),
                param[RiskLevelOrStr | None]("risk_level", risk_level),
                param[Date | None]("created_at_from", created_at_from),
                param[Date | None]("created_at_to", created_at_to),
                param[Date | None]("processed_at_from", processed_at_from),
                param[Date | None]("processed_at_to", processed_at_to),
                param[str | None]("order_by", order_by),
                param[OrderOrStr | None]("order", order),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersRiskChecksLogsResponse],
            error_mapper=numbers_risk_checks_logs_error_mapper,
            request_options=request_options,
        )


class AsyncRiskChecksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def numbers_risk_checks_create(
        self,
        body: ApiV2NumbersRiskChecksRequest | ApiV2NumbersRiskChecksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersRiskChecksResponse1, NumbersRiskChecksCreateErrorBody]:
        """Creates a new risk check task for the provided phone numbers (maximum 1500 numbers per request).

        ``risk_check_request.task_id`` feeds numbers_risk_checks_index and numbers_risk_checks_logs (``task_ids``): the
        task status and the per-number results.

        **Note:** Results are informational only. Use at your own discretion.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/numbers/risk_checks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2NumbersRiskChecksRequest | ApiV2NumbersRiskChecksRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersRiskChecksResponse1],
            error_mapper=numbers_risk_checks_create_error_mapper,
            request_options=request_options,
        )

    async def numbers_risk_checks_index(
        self,
        *,
        task_ids: str | None = None,
        status: StatusDidlogicComRiskChecksApiOrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersRiskChecksResponse, NumbersRiskChecksIndexErrorBody]:
        """Retrieves a list of risk check tasks.

        Returns information about all risk check tasks created by your organization, including task status, number
        counts, and processing timestamps. Supports filtering by various criteria and pagination.

        ``tasks[].id`` feeds numbers_risk_checks_logs (``task_ids``). Rows: numbers_risk_checks_logs.

        Args:
            task_ids: Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_logs
            status: Filter by status
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/risk_checks"),
            query_params=[
                param[str | None]("task_ids", task_ids),
                param[StatusDidlogicComRiskChecksApiOrStr | None]("status", status),
                param[Date | None]("created_at_from", created_at_from),
                param[Date | None]("created_at_to", created_at_to),
                param[Date | None]("processed_at_from", processed_at_from),
                param[Date | None]("processed_at_to", processed_at_to),
                param[str | None]("order_by", order_by),
                param[OrderOrStr | None]("order", order),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersRiskChecksResponse],
            error_mapper=numbers_risk_checks_index_error_mapper,
            request_options=request_options,
        )

    async def numbers_risk_checks_logs(
        self,
        *,
        ids: str | None = None,
        task_ids: int | None = None,
        number: str | None = None,
        status: StatusDidlogicComRiskChecksApiOrStr | None = None,
        risk_level: RiskLevelOrStr | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        processed_at_from: Date | None = None,
        processed_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersRiskChecksLogsResponse, NumbersRiskChecksLogsErrorBody]:
        """Retrieves risk check logs for individual phone numbers.

        Returns detailed information about each number that was checked, including its risk level, status, and
        processing time. Supports filtering by various criteria and pagination.

        ``logs[].task_id`` feeds numbers_risk_checks_index (``task_ids``).

        Args:
            ids: Filter logs by log IDs (comma-separated)
            task_ids: Task IDs (comma-separated) from numbers_risk_checks_create, numbers_risk_checks_index
            number: Filter logs by specific phone numbers (comma-separated)
            status: Filter by status
            risk_level: Filter logs by risk level
            created_at_from: Filter created from this date (YYYY-MM-DD)
            created_at_to: Filter created until this date (YYYY-MM-DD)
            processed_at_from: Filter processed from this date (YYYY-MM-DD)
            processed_at_to: Filter processed until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/risk_checks/logs"),
            query_params=[
                param[str | None]("ids", ids),
                param[int | None]("task_ids", task_ids),
                param[str | None]("number", number),
                param[StatusDidlogicComRiskChecksApiOrStr | None]("status", status),
                param[RiskLevelOrStr | None]("risk_level", risk_level),
                param[Date | None]("created_at_from", created_at_from),
                param[Date | None]("created_at_to", created_at_to),
                param[Date | None]("processed_at_from", processed_at_from),
                param[Date | None]("processed_at_to", processed_at_to),
                param[str | None]("order_by", order_by),
                param[OrderOrStr | None]("order", order),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersRiskChecksLogsResponse],
            error_mapper=numbers_risk_checks_logs_error_mapper,
            request_options=request_options,
        )
