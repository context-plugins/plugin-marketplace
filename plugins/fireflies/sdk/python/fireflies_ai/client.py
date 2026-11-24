from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseFirefliesAiClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiResult,
    BearerAuthScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    SecuredRawResponse,
    json_body,
    json_decoder,
    no_auth,
    param,
    unwrap,
)
from .errors.graphql_operation_error import GraphqlOperationErrorBody, graphql_operation_error_mapper
from .models.graph_ql_request import GraphQlRequest, GraphQlRequestDict
from .models.graph_ql_response import GraphQlResponse
from .server.server import Server


class FirefliesAiClient(BaseFirefliesAiClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "FirefliesAiClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def with_raw_response(self) -> ApiWithRawResponse:
        return ApiWithRawResponse(self._raw_client, self._server, self._auth)

    def graphql_operation(
        self, body: GraphQlRequest | GraphQlRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> GraphQlResponse:
        """All Fireflies API operations are performed via GraphQL POST requests to this single endpoint. The body must
        contain a ``query`` string (GraphQL query or mutation) and optionally a ``variables`` object. See the Fireflies
        documentation for the full schema of available queries and mutations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            GraphQL response (errors may still be present in the response body)

        Raises:
            ApiError: Authentication failed — invalid or missing API key Rate limit exceeded Internal server error
                ``error`` is ``GraphQlErrorResponse | RawError``."""
        return unwrap(self.with_raw_response.graphql_operation(body, request_options=request_options))

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


class ApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def graphql_operation(
        self, body: GraphQlRequest | GraphQlRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GraphQlResponse, GraphqlOperationErrorBody]:
        """All Fireflies API operations are performed via GraphQL POST requests to this single endpoint. The body must
        contain a ``query`` string (GraphQL query or mutation) and optionally a ``variables`` object. See the Fireflies
        documentation for the full schema of available queries and mutations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GraphQlRequest | GraphQlRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GraphQlResponse],
            error_mapper=graphql_operation_error_mapper,
            request_options=request_options,
        )


Client = FirefliesAiClient
