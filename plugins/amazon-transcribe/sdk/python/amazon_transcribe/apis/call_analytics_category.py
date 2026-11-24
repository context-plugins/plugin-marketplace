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
    empty_response,
    param,
    unwrap,
)
from ..errors.create_call_analytics_category_error import (
    CreateCallAnalyticsCategoryErrorBody,
    create_call_analytics_category_error_mapper,
)
from ..errors.delete_call_analytics_category_error import (
    DeleteCallAnalyticsCategoryErrorBody,
    delete_call_analytics_category_error_mapper,
)
from ..errors.get_call_analytics_category_error import (
    GetCallAnalyticsCategoryErrorBody,
    get_call_analytics_category_error_mapper,
)
from ..errors.list_call_analytics_categories_error import (
    ListCallAnalyticsCategoriesErrorBody,
    list_call_analytics_categories_error_mapper,
)
from ..errors.update_call_analytics_category_error import (
    UpdateCallAnalyticsCategoryErrorBody,
    update_call_analytics_category_error_mapper,
)
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1 import XAmzTarget1OrStr
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..server.server import Server


class CallAnalyticsCategory:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CallAnalyticsCategoryWithRawResponse(client, server, auth)

    def create_call_analytics_category(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics
        transcriptions. Note that in order to apply categories to your transcriptions, you must create them before
        submitting your transcription request, as categories cannot be applied retroactively. When creating a new
        category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category.
        POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be
        applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL
        category by default. Call Analytics categories are composed of rules. For each category, you must create between
        1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn
        more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating
        categories for real-time transcriptions.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.create_call_analytics_category(x_amz_target, request_options=request_options)
        )

    def delete_call_analytics_category(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete
        using CategoryName. Category names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_call_analytics_category(x_amz_target, request_options=request_options)
        )

    def get_call_analytics_category(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Provides information about the specified Call Analytics category. To get a list of your Call Analytics
        categories, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.get_call_analytics_category(x_amz_target, request_options=request_options)
        )

    def list_call_analytics_categories(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed
        information about a specific Call Analytics category, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_call_analytics_categories(x_amz_target, request_options=request_options)
        )

    def update_call_analytics_category(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory
        operation overwrites all existing rules contained in the specified category. You cannot append additional rules
        onto an existing category. To create a new category, see .

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_call_analytics_category(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CallAnalyticsCategoryWithRawResponse:
        return self._with_raw_response


class AsyncCallAnalyticsCategory:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCallAnalyticsCategoryWithRawResponse(client, server, auth)

    async def create_call_analytics_category(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics
        transcriptions. Note that in order to apply categories to your transcriptions, you must create them before
        submitting your transcription request, as categories cannot be applied retroactively. When creating a new
        category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category.
        POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be
        applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL
        category by default. Call Analytics categories are composed of rules. For each category, you must create between
        1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn
        more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating
        categories for real-time transcriptions.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_call_analytics_category(x_amz_target, request_options=request_options)
        )

    async def delete_call_analytics_category(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete
        using CategoryName. Category names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_call_analytics_category(x_amz_target, request_options=request_options)
        )

    async def get_call_analytics_category(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Provides information about the specified Call Analytics category. To get a list of your Call Analytics
        categories, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_call_analytics_category(x_amz_target, request_options=request_options)
        )

    async def list_call_analytics_categories(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed
        information about a specific Call Analytics category, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_call_analytics_categories(x_amz_target, request_options=request_options)
        )

    async def update_call_analytics_category(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory
        operation overwrites all existing rules contained in the specified category. You cannot append additional rules
        onto an existing category. To create a new category, see .

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_call_analytics_category(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCallAnalyticsCategoryWithRawResponse:
        return self._with_raw_response


class CallAnalyticsCategoryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_call_analytics_category(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateCallAnalyticsCategoryErrorBody]:
        """Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics
        transcriptions. Note that in order to apply categories to your transcriptions, you must create them before
        submitting your transcription request, as categories cannot be applied retroactively. When creating a new
        category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category.
        POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be
        applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL
        category by default. Call Analytics categories are composed of rules. For each category, you must create between
        1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn
        more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating
        categories for real-time transcriptions.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateCallAnalyticsCategory"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_call_analytics_category_error_mapper,
            request_options=request_options,
        )

    def delete_call_analytics_category(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCallAnalyticsCategoryErrorBody]:
        """Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete
        using CategoryName. Category names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteCallAnalyticsCategory"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_call_analytics_category_error_mapper,
            request_options=request_options,
        )

    def get_call_analytics_category(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetCallAnalyticsCategoryErrorBody]:
        """Provides information about the specified Call Analytics category. To get a list of your Call Analytics
        categories, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetCallAnalyticsCategory"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_call_analytics_category_error_mapper,
            request_options=request_options,
        )

    def list_call_analytics_categories(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListCallAnalyticsCategoriesErrorBody]:
        """Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed
        information about a specific Call Analytics category, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCallAnalyticsCategories"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_call_analytics_categories_error_mapper,
            request_options=request_options,
        )

    def update_call_analytics_category(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateCallAnalyticsCategoryErrorBody]:
        """Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory
        operation overwrites all existing rules contained in the specified category. You cannot append additional rules
        onto an existing category. To create a new category, see .

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateCallAnalyticsCategory"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_call_analytics_category_error_mapper,
            request_options=request_options,
        )


class AsyncCallAnalyticsCategoryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_call_analytics_category(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateCallAnalyticsCategoryErrorBody]:
        """Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics
        transcriptions. Note that in order to apply categories to your transcriptions, you must create them before
        submitting your transcription request, as categories cannot be applied retroactively. When creating a new
        category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category.
        POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be
        applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL
        category by default. Call Analytics categories are composed of rules. For each category, you must create between
        1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn
        more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating
        categories for real-time transcriptions.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateCallAnalyticsCategory"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_call_analytics_category_error_mapper,
            request_options=request_options,
        )

    async def delete_call_analytics_category(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCallAnalyticsCategoryErrorBody]:
        """Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete
        using CategoryName. Category names are case sensitive.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteCallAnalyticsCategory"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_call_analytics_category_error_mapper,
            request_options=request_options,
        )

    async def get_call_analytics_category(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetCallAnalyticsCategoryErrorBody]:
        """Provides information about the specified Call Analytics category. To get a list of your Call Analytics
        categories, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetCallAnalyticsCategory"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_call_analytics_category_error_mapper,
            request_options=request_options,
        )

    async def list_call_analytics_categories(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListCallAnalyticsCategoriesErrorBody]:
        """Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed
        information about a specific Call Analytics category, use the operation.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCallAnalyticsCategories"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_call_analytics_categories_error_mapper,
            request_options=request_options,
        )

    async def update_call_analytics_category(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateCallAnalyticsCategoryErrorBody]:
        """Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory
        operation overwrites all existing rules contained in the specified category. You cannot append additional rules
        onto an existing category. To create a new category, see .

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateCallAnalyticsCategory"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_call_analytics_category_error_mapper,
            request_options=request_options,
        )
