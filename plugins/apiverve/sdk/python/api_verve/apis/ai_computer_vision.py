from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_body,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.articleideas_error import ArticleideasErrorBody, articleideas_error_mapper
from ..errors.codedetector_error import CodedetectorErrorBody, codedetector_error_mapper
from ..errors.imagecaption_error import ImagecaptionErrorBody, imagecaption_error_mapper
from ..errors.imagetotext_error import ImagetotextErrorBody, imagetotext_error_mapper
from ..errors.languagedetector_error import LanguagedetectorErrorBody, languagedetector_error_mapper
from ..errors.sentimentanalysis_error import SentimentanalysisErrorBody, sentimentanalysis_error_mapper
from ..models.v1_articleideas_response import V1ArticleideasResponse
from ..models.v1_codedetector_request import V1CodedetectorRequest, V1CodedetectorRequestDict
from ..models.v1_codedetector_response import V1CodedetectorResponse
from ..models.v1_imagecaption_response import V1ImagecaptionResponse
from ..models.v1_imagetotext_response import V1ImagetotextResponse
from ..models.v1_languagedetector_request import V1LanguagedetectorRequest, V1LanguagedetectorRequestDict
from ..models.v1_languagedetector_response import V1LanguagedetectorResponse
from ..models.v1_sentimentanalysis_request import V1SentimentanalysisRequest, V1SentimentanalysisRequestDict
from ..models.v1_sentimentanalysis_response import V1SentimentanalysisResponse
from ..server.server import Server


class AiComputerVision:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AiComputerVisionWithRawResponse(client, server, auth)

    def articleideas(
        self, topic: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ArticleideasResponse:
        """Generate article ideas based on a topic using Artificial Intelligence

        Args:
            topic: The topic for which you want to generate article ideas (up to 50 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.articleideas(topic, request_options=request_options))

    def codedetector(
        self,
        body: V1CodedetectorRequest | V1CodedetectorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CodedetectorResponse:
        """Code Detector is a simple tool for detecting the language of code in text. It returns details such as
        extension, language, family, and more.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.codedetector(body, request_options=request_options))

    def imagecaption(
        self, image: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ImagecaptionResponse:
        """Image Caption is an AI-powered tool that generates descriptive captions for images. Simply upload an image
        and receive a natural language description of its contents.

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.imagecaption(image, request_options=request_options))

    def imagetotext(
        self, image: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ImagetotextResponse:
        """Extract text from an uploaded image using OCR

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.imagetotext(image, request_options=request_options))

    def languagedetector(
        self,
        body: V1LanguagedetectorRequest | V1LanguagedetectorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1LanguagedetectorResponse:
        """Detect the language of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.languagedetector(body, request_options=request_options))

    def sentimentanalysis(
        self,
        body: V1SentimentanalysisRequest | V1SentimentanalysisRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SentimentanalysisResponse:
        """Analyze the sentiment of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.sentimentanalysis(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AiComputerVisionWithRawResponse:
        return self._with_raw_response


class AsyncAiComputerVision:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAiComputerVisionWithRawResponse(client, server, auth)

    async def articleideas(
        self, topic: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ArticleideasResponse:
        """Generate article ideas based on a topic using Artificial Intelligence

        Args:
            topic: The topic for which you want to generate article ideas (up to 50 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.articleideas(topic, request_options=request_options))

    async def codedetector(
        self,
        body: V1CodedetectorRequest | V1CodedetectorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CodedetectorResponse:
        """Code Detector is a simple tool for detecting the language of code in text. It returns details such as
        extension, language, family, and more.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.codedetector(body, request_options=request_options))

    async def imagecaption(
        self, image: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ImagecaptionResponse:
        """Image Caption is an AI-powered tool that generates descriptive captions for images. Simply upload an image
        and receive a natural language description of its contents.

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.imagecaption(image, request_options=request_options))

    async def imagetotext(
        self, image: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ImagetotextResponse:
        """Extract text from an uploaded image using OCR

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.imagetotext(image, request_options=request_options))

    async def languagedetector(
        self,
        body: V1LanguagedetectorRequest | V1LanguagedetectorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1LanguagedetectorResponse:
        """Detect the language of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.languagedetector(body, request_options=request_options))

    async def sentimentanalysis(
        self,
        body: V1SentimentanalysisRequest | V1SentimentanalysisRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SentimentanalysisResponse:
        """Analyze the sentiment of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.sentimentanalysis(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAiComputerVisionWithRawResponse:
        return self._with_raw_response


class AiComputerVisionWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def articleideas(
        self, topic: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ArticleideasResponse, ArticleideasErrorBody]:
        """Generate article ideas based on a topic using Artificial Intelligence

        Args:
            topic: The topic for which you want to generate article ideas (up to 50 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/articleideas"),
            query_params=[param[str]("topic", topic)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ArticleideasResponse],
            error_mapper=articleideas_error_mapper,
            request_options=request_options,
        )

    def codedetector(
        self,
        body: V1CodedetectorRequest | V1CodedetectorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CodedetectorResponse, CodedetectorErrorBody]:
        """Code Detector is a simple tool for detecting the language of code in text. It returns details such as
        extension, language, family, and more.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/codedetector"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CodedetectorRequest | V1CodedetectorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CodedetectorResponse],
            error_mapper=codedetector_error_mapper,
            request_options=request_options,
        )

    def imagecaption(
        self, image: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ImagecaptionResponse, ImagecaptionErrorBody]:
        """Image Caption is an AI-powered tool that generates descriptive captions for images. Simply upload an image
        and receive a natural language description of its contents.

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/imagecaption"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ImagecaptionResponse],
            error_mapper=imagecaption_error_mapper,
            request_options=request_options,
        )

    def imagetotext(
        self, image: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ImagetotextResponse, ImagetotextErrorBody]:
        """Extract text from an uploaded image using OCR

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/imagetotext"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ImagetotextResponse],
            error_mapper=imagetotext_error_mapper,
            request_options=request_options,
        )

    def languagedetector(
        self,
        body: V1LanguagedetectorRequest | V1LanguagedetectorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LanguagedetectorResponse, LanguagedetectorErrorBody]:
        """Detect the language of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/languagedetector"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LanguagedetectorRequest | V1LanguagedetectorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LanguagedetectorResponse],
            error_mapper=languagedetector_error_mapper,
            request_options=request_options,
        )

    def sentimentanalysis(
        self,
        body: V1SentimentanalysisRequest | V1SentimentanalysisRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SentimentanalysisResponse, SentimentanalysisErrorBody]:
        """Analyze the sentiment of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/sentimentanalysis"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SentimentanalysisRequest | V1SentimentanalysisRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SentimentanalysisResponse],
            error_mapper=sentimentanalysis_error_mapper,
            request_options=request_options,
        )


class AsyncAiComputerVisionWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def articleideas(
        self, topic: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ArticleideasResponse, ArticleideasErrorBody]:
        """Generate article ideas based on a topic using Artificial Intelligence

        Args:
            topic: The topic for which you want to generate article ideas (up to 50 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/articleideas"),
            query_params=[param[str]("topic", topic)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ArticleideasResponse],
            error_mapper=articleideas_error_mapper,
            request_options=request_options,
        )

    async def codedetector(
        self,
        body: V1CodedetectorRequest | V1CodedetectorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CodedetectorResponse, CodedetectorErrorBody]:
        """Code Detector is a simple tool for detecting the language of code in text. It returns details such as
        extension, language, family, and more.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/codedetector"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CodedetectorRequest | V1CodedetectorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CodedetectorResponse],
            error_mapper=codedetector_error_mapper,
            request_options=request_options,
        )

    async def imagecaption(
        self, image: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ImagecaptionResponse, ImagecaptionErrorBody]:
        """Image Caption is an AI-powered tool that generates descriptive captions for images. Simply upload an image
        and receive a natural language description of its contents.

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/imagecaption"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ImagecaptionResponse],
            error_mapper=imagecaption_error_mapper,
            request_options=request_options,
        )

    async def imagetotext(
        self, image: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ImagetotextResponse, ImagetotextErrorBody]:
        """Extract text from an uploaded image using OCR

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/imagetotext"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ImagetotextResponse],
            error_mapper=imagetotext_error_mapper,
            request_options=request_options,
        )

    async def languagedetector(
        self,
        body: V1LanguagedetectorRequest | V1LanguagedetectorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LanguagedetectorResponse, LanguagedetectorErrorBody]:
        """Detect the language of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/languagedetector"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LanguagedetectorRequest | V1LanguagedetectorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LanguagedetectorResponse],
            error_mapper=languagedetector_error_mapper,
            request_options=request_options,
        )

    async def sentimentanalysis(
        self,
        body: V1SentimentanalysisRequest | V1SentimentanalysisRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SentimentanalysisResponse, SentimentanalysisErrorBody]:
        """Analyze the sentiment of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/sentimentanalysis"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SentimentanalysisRequest | V1SentimentanalysisRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SentimentanalysisResponse],
            error_mapper=sentimentanalysis_error_mapper,
            request_options=request_options,
        )
