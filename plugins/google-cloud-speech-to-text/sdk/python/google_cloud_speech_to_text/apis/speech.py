from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
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
from ..errors.speech_speech_longrunningrecognize_error import (
    SpeechSpeechLongrunningrecognizeErrorBody,
    speech_speech_longrunningrecognize_error_mapper,
)
from ..errors.speech_speech_recognize_error import SpeechSpeechRecognizeErrorBody, speech_speech_recognize_error_mapper
from ..models.long_running_recognize_request import LongRunningRecognizeRequest, LongRunningRecognizeRequestDict
from ..models.operation import Operation
from ..models.recognize_request import RecognizeRequest, RecognizeRequestDict
from ..models.recognize_response import RecognizeResponse
from ..server.server import Server


class Speech:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SpeechWithRawResponse(client, server, auth)

    def speech_speech_longrunningrecognize(
        self,
        body: LongRunningRecognizeRequest | LongRunningRecognizeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface.
        Returns either an ``Operation.error`` or an ``Operation.response`` which contains a
        ``LongRunningRecognizeResponse`` message. For more information on asynchronous speech recognition, see the
        how-to.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(self._with_raw_response.speech_speech_longrunningrecognize(body, request_options=request_options))

    def speech_speech_recognize(
        self, body: RecognizeRequest | RecognizeRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> RecognizeResponse:
        """Performs synchronous speech recognition: receive results after all audio has been sent and processed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(self._with_raw_response.speech_speech_recognize(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SpeechWithRawResponse:
        return self._with_raw_response


class AsyncSpeech:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSpeechWithRawResponse(client, server, auth)

    async def speech_speech_longrunningrecognize(
        self,
        body: LongRunningRecognizeRequest | LongRunningRecognizeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface.
        Returns either an ``Operation.error`` or an ``Operation.response`` which contains a
        ``LongRunningRecognizeResponse`` message. For more information on asynchronous speech recognition, see the
        how-to.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_speech_longrunningrecognize(body, request_options=request_options)
        )

    async def speech_speech_recognize(
        self, body: RecognizeRequest | RecognizeRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RecognizeResponse:
        """Performs synchronous speech recognition: receive results after all audio has been sent and processed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(await self._with_raw_response.speech_speech_recognize(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSpeechWithRawResponse:
        return self._with_raw_response


class SpeechWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def speech_speech_longrunningrecognize(
        self,
        body: LongRunningRecognizeRequest | LongRunningRecognizeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, SpeechSpeechLongrunningrecognizeErrorBody]:
        """Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface.
        Returns either an ``Operation.error`` or an ``Operation.response`` which contains a
        ``LongRunningRecognizeResponse`` message. For more information on asynchronous speech recognition, see the
        how-to.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/speech:longrunningrecognize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LongRunningRecognizeRequest | LongRunningRecognizeRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=speech_speech_longrunningrecognize_error_mapper,
            request_options=request_options,
        )

    def speech_speech_recognize(
        self, body: RecognizeRequest | RecognizeRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RecognizeResponse, SpeechSpeechRecognizeErrorBody]:
        """Performs synchronous speech recognition: receive results after all audio has been sent and processed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/speech:recognize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecognizeRequest | RecognizeRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[RecognizeResponse],
            error_mapper=speech_speech_recognize_error_mapper,
            request_options=request_options,
        )


class AsyncSpeechWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def speech_speech_longrunningrecognize(
        self,
        body: LongRunningRecognizeRequest | LongRunningRecognizeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, SpeechSpeechLongrunningrecognizeErrorBody]:
        """Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface.
        Returns either an ``Operation.error`` or an ``Operation.response`` which contains a
        ``LongRunningRecognizeResponse`` message. For more information on asynchronous speech recognition, see the
        how-to.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/speech:longrunningrecognize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LongRunningRecognizeRequest | LongRunningRecognizeRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=speech_speech_longrunningrecognize_error_mapper,
            request_options=request_options,
        )

    async def speech_speech_recognize(
        self, body: RecognizeRequest | RecognizeRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RecognizeResponse, SpeechSpeechRecognizeErrorBody]:
        """Performs synchronous speech recognition: receive results after all audio has been sent and processed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/speech:recognize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecognizeRequest | RecognizeRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[RecognizeResponse],
            error_mapper=speech_speech_recognize_error_mapper,
            request_options=request_options,
        )
