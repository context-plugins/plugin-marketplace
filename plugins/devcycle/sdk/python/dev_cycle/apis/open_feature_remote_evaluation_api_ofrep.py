from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.post_ofrep_v1_evaluate_flags_by_key_error import (
    PostOfrepV1EvaluateFlagsByKeyErrorBody,
    post_ofrep_v1_evaluate_flags_by_key_error_mapper,
)
from ..errors.post_ofrep_v1_evaluate_flags_error import (
    PostOfrepV1EvaluateFlagsErrorBody,
    post_ofrep_v1_evaluate_flags_error_mapper,
)
from ..models.ofrep_bulk_evaluation_request import OfrepBulkEvaluationRequest, OfrepBulkEvaluationRequestDict
from ..models.ofrep_bulk_evaluation_success import OfrepBulkEvaluationSuccess
from ..models.ofrep_evaluation_request import OfrepEvaluationRequest, OfrepEvaluationRequestDict
from ..models.ofrep_evaluation_success import OfrepEvaluationSuccess
from ..server.server import Server


class OpenFeatureRemoteEvaluationApiOfrep:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = OpenFeatureRemoteEvaluationApiOfrepWithRawResponse(client, server)

    def post_ofrep_v1_evaluate_flags(
        self,
        *,
        if_none_match: str | None = None,
        body: OfrepBulkEvaluationRequest | OfrepBulkEvaluationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OfrepBulkEvaluationSuccess:
        """Return all flag values for a user context.

        Args:
            if_none_match: The request will be processed only if ETag doesn't match any of the values listed.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OFREP successful evaluation response

        Raises:
            ApiError: Bad evaluation request Unauthorized - You need credentials to access the API Forbidden - You are
                not authorized to access the API Rate limit reached on the Flag Management System Internal server error
                ``error`` is ``OfrepBulkEvaluationFailure | OfrepGeneralErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_ofrep_v1_evaluate_flags(
                if_none_match=if_none_match, body=body, request_options=request_options
            ),
        )

    def post_ofrep_v1_evaluate_flags_by_key(
        self,
        key: str,
        *,
        body: OfrepEvaluationRequest | OfrepEvaluationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OfrepEvaluationSuccess:
        """Return a single flag for a user context

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OFREP successful evaluation response

        Raises:
            ApiError: Bad evaluation request Flag not found Unauthorized - You need credentials to access the API
                Forbidden - You are not authorized to access the API Rate limit reached on the Flag Management System
                Internal server error ``error`` is ``OfrepEvaluationFailure | OfrepFlagNotFound |
                OfrepGeneralErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_ofrep_v1_evaluate_flags_by_key(key, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> OpenFeatureRemoteEvaluationApiOfrepWithRawResponse:
        return self._with_raw_response


class AsyncOpenFeatureRemoteEvaluationApiOfrep:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncOpenFeatureRemoteEvaluationApiOfrepWithRawResponse(client, server)

    async def post_ofrep_v1_evaluate_flags(
        self,
        *,
        if_none_match: str | None = None,
        body: OfrepBulkEvaluationRequest | OfrepBulkEvaluationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OfrepBulkEvaluationSuccess:
        """Return all flag values for a user context.

        Args:
            if_none_match: The request will be processed only if ETag doesn't match any of the values listed.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OFREP successful evaluation response

        Raises:
            ApiError: Bad evaluation request Unauthorized - You need credentials to access the API Forbidden - You are
                not authorized to access the API Rate limit reached on the Flag Management System Internal server error
                ``error`` is ``OfrepBulkEvaluationFailure | OfrepGeneralErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_ofrep_v1_evaluate_flags(
                if_none_match=if_none_match, body=body, request_options=request_options
            ),
        )

    async def post_ofrep_v1_evaluate_flags_by_key(
        self,
        key: str,
        *,
        body: OfrepEvaluationRequest | OfrepEvaluationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OfrepEvaluationSuccess:
        """Return a single flag for a user context

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OFREP successful evaluation response

        Raises:
            ApiError: Bad evaluation request Flag not found Unauthorized - You need credentials to access the API
                Forbidden - You are not authorized to access the API Rate limit reached on the Flag Management System
                Internal server error ``error`` is ``OfrepEvaluationFailure | OfrepFlagNotFound |
                OfrepGeneralErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_ofrep_v1_evaluate_flags_by_key(
                key, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOpenFeatureRemoteEvaluationApiOfrepWithRawResponse:
        return self._with_raw_response


class OpenFeatureRemoteEvaluationApiOfrepWithRawResponse(BaseRawResponse[RawClient, Server]):
    def post_ofrep_v1_evaluate_flags(
        self,
        *,
        if_none_match: str | None = None,
        body: OfrepBulkEvaluationRequest | OfrepBulkEvaluationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OfrepBulkEvaluationSuccess, PostOfrepV1EvaluateFlagsErrorBody]:
        """Return all flag values for a user context.

        Args:
            if_none_match: The request will be processed only if ETag doesn't match any of the values listed.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/ofrep/v1/evaluate/flags"),
            headers=[param[str | None]("If-None-Match", if_none_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OfrepBulkEvaluationRequest | OfrepBulkEvaluationRequestDict | None](body),
            decoder=json_decoder[OfrepBulkEvaluationSuccess],
            error_mapper=post_ofrep_v1_evaluate_flags_error_mapper,
            request_options=request_options,
        )

    def post_ofrep_v1_evaluate_flags_by_key(
        self,
        key: str,
        *,
        body: OfrepEvaluationRequest | OfrepEvaluationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OfrepEvaluationSuccess, PostOfrepV1EvaluateFlagsByKeyErrorBody]:
        """Return a single flag for a user context

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/ofrep/v1/evaluate/flags/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OfrepEvaluationRequest | OfrepEvaluationRequestDict | None](body),
            decoder=json_decoder[OfrepEvaluationSuccess],
            error_mapper=post_ofrep_v1_evaluate_flags_by_key_error_mapper,
            request_options=request_options,
        )


class AsyncOpenFeatureRemoteEvaluationApiOfrepWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def post_ofrep_v1_evaluate_flags(
        self,
        *,
        if_none_match: str | None = None,
        body: OfrepBulkEvaluationRequest | OfrepBulkEvaluationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OfrepBulkEvaluationSuccess, PostOfrepV1EvaluateFlagsErrorBody]:
        """Return all flag values for a user context.

        Args:
            if_none_match: The request will be processed only if ETag doesn't match any of the values listed.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/ofrep/v1/evaluate/flags"),
            headers=[param[str | None]("If-None-Match", if_none_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OfrepBulkEvaluationRequest | OfrepBulkEvaluationRequestDict | None](body),
            decoder=async_json_decoder[OfrepBulkEvaluationSuccess],
            error_mapper=post_ofrep_v1_evaluate_flags_error_mapper,
            request_options=request_options,
        )

    async def post_ofrep_v1_evaluate_flags_by_key(
        self,
        key: str,
        *,
        body: OfrepEvaluationRequest | OfrepEvaluationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OfrepEvaluationSuccess, PostOfrepV1EvaluateFlagsByKeyErrorBody]:
        """Return a single flag for a user context

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/ofrep/v1/evaluate/flags/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OfrepEvaluationRequest | OfrepEvaluationRequestDict | None](body),
            decoder=async_json_decoder[OfrepEvaluationSuccess],
            error_mapper=post_ofrep_v1_evaluate_flags_by_key_error_mapper,
            request_options=request_options,
        )
