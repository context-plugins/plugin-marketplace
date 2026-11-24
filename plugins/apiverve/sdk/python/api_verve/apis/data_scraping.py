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
from ..errors.contactextractor_error import ContactextractorErrorBody, contactextractor_error_mapper
from ..errors.linkscraper_error import LinkscraperErrorBody, linkscraper_error_mapper
from ..errors.seoscraper_error import SeoscraperErrorBody, seoscraper_error_mapper
from ..errors.webimagescraper_error import WebimagescraperErrorBody, webimagescraper_error_mapper
from ..errors.webscreenshots_error import WebscreenshotsErrorBody, webscreenshots_error_mapper
from ..models.v1_contactextractor_request import V1ContactextractorRequest, V1ContactextractorRequestDict
from ..models.v1_contactextractor_response import V1ContactextractorResponse
from ..models.v1_linkscraper_request import V1LinkscraperRequest, V1LinkscraperRequestDict
from ..models.v1_linkscraper_response import V1LinkscraperResponse
from ..models.v1_seoscraper_request import V1SeoscraperRequest, V1SeoscraperRequestDict
from ..models.v1_seoscraper_response import V1SeoscraperResponse
from ..models.v1_webimagescraper_request import V1WebimagescraperRequest, V1WebimagescraperRequestDict
from ..models.v1_webimagescraper_response import V1WebimagescraperResponse
from ..models.v1_webscreenshots_request import V1WebscreenshotsRequest, V1WebscreenshotsRequestDict
from ..models.v1_webscreenshots_response import V1WebscreenshotsResponse
from ..server.server import Server


class DataScraping:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataScrapingWithRawResponse(client, server, auth)

    def contactextractor(
        self,
        body: V1ContactextractorRequest | V1ContactextractorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ContactextractorResponse:
        """Extract contact data from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.contactextractor(body, request_options=request_options))

    def linkscraper(
        self,
        body: V1LinkscraperRequest | V1LinkscraperRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1LinkscraperResponse:
        """Scrape all the links on a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.linkscraper(body, request_options=request_options))

    def seoscraper(
        self,
        body: V1SeoscraperRequest | V1SeoscraperRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SeoscraperResponse:
        """Scrape SEO data from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.seoscraper(body, request_options=request_options))

    def webimagescraper(
        self,
        body: V1WebimagescraperRequest | V1WebimagescraperRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WebimagescraperResponse:
        """Web Image Scraper is a simple tool for scraping images from a website. It returns the URLs of the images
        found on the website.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.webimagescraper(body, request_options=request_options))

    def webscreenshots(
        self,
        body: V1WebscreenshotsRequest | V1WebscreenshotsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WebscreenshotsResponse:
        """Capture a screenshot of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.webscreenshots(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DataScrapingWithRawResponse:
        return self._with_raw_response


class AsyncDataScraping:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataScrapingWithRawResponse(client, server, auth)

    async def contactextractor(
        self,
        body: V1ContactextractorRequest | V1ContactextractorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ContactextractorResponse:
        """Extract contact data from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.contactextractor(body, request_options=request_options))

    async def linkscraper(
        self,
        body: V1LinkscraperRequest | V1LinkscraperRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1LinkscraperResponse:
        """Scrape all the links on a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.linkscraper(body, request_options=request_options))

    async def seoscraper(
        self,
        body: V1SeoscraperRequest | V1SeoscraperRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SeoscraperResponse:
        """Scrape SEO data from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.seoscraper(body, request_options=request_options))

    async def webimagescraper(
        self,
        body: V1WebimagescraperRequest | V1WebimagescraperRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WebimagescraperResponse:
        """Web Image Scraper is a simple tool for scraping images from a website. It returns the URLs of the images
        found on the website.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.webimagescraper(body, request_options=request_options))

    async def webscreenshots(
        self,
        body: V1WebscreenshotsRequest | V1WebscreenshotsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WebscreenshotsResponse:
        """Capture a screenshot of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.webscreenshots(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDataScrapingWithRawResponse:
        return self._with_raw_response


class DataScrapingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def contactextractor(
        self,
        body: V1ContactextractorRequest | V1ContactextractorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ContactextractorResponse, ContactextractorErrorBody]:
        """Extract contact data from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/contactextractor"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContactextractorRequest | V1ContactextractorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ContactextractorResponse],
            error_mapper=contactextractor_error_mapper,
            request_options=request_options,
        )

    def linkscraper(
        self,
        body: V1LinkscraperRequest | V1LinkscraperRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LinkscraperResponse, LinkscraperErrorBody]:
        """Scrape all the links on a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/linkscraper"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LinkscraperRequest | V1LinkscraperRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LinkscraperResponse],
            error_mapper=linkscraper_error_mapper,
            request_options=request_options,
        )

    def seoscraper(
        self,
        body: V1SeoscraperRequest | V1SeoscraperRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SeoscraperResponse, SeoscraperErrorBody]:
        """Scrape SEO data from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/seoscraper"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SeoscraperRequest | V1SeoscraperRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SeoscraperResponse],
            error_mapper=seoscraper_error_mapper,
            request_options=request_options,
        )

    def webimagescraper(
        self,
        body: V1WebimagescraperRequest | V1WebimagescraperRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebimagescraperResponse, WebimagescraperErrorBody]:
        """Web Image Scraper is a simple tool for scraping images from a website. It returns the URLs of the images
        found on the website.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webimagescraper"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebimagescraperRequest | V1WebimagescraperRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WebimagescraperResponse],
            error_mapper=webimagescraper_error_mapper,
            request_options=request_options,
        )

    def webscreenshots(
        self,
        body: V1WebscreenshotsRequest | V1WebscreenshotsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebscreenshotsResponse, WebscreenshotsErrorBody]:
        """Capture a screenshot of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webscreenshots"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebscreenshotsRequest | V1WebscreenshotsRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WebscreenshotsResponse],
            error_mapper=webscreenshots_error_mapper,
            request_options=request_options,
        )


class AsyncDataScrapingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def contactextractor(
        self,
        body: V1ContactextractorRequest | V1ContactextractorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ContactextractorResponse, ContactextractorErrorBody]:
        """Extract contact data from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/contactextractor"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContactextractorRequest | V1ContactextractorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ContactextractorResponse],
            error_mapper=contactextractor_error_mapper,
            request_options=request_options,
        )

    async def linkscraper(
        self,
        body: V1LinkscraperRequest | V1LinkscraperRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LinkscraperResponse, LinkscraperErrorBody]:
        """Scrape all the links on a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/linkscraper"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LinkscraperRequest | V1LinkscraperRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LinkscraperResponse],
            error_mapper=linkscraper_error_mapper,
            request_options=request_options,
        )

    async def seoscraper(
        self,
        body: V1SeoscraperRequest | V1SeoscraperRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SeoscraperResponse, SeoscraperErrorBody]:
        """Scrape SEO data from a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/seoscraper"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SeoscraperRequest | V1SeoscraperRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SeoscraperResponse],
            error_mapper=seoscraper_error_mapper,
            request_options=request_options,
        )

    async def webimagescraper(
        self,
        body: V1WebimagescraperRequest | V1WebimagescraperRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebimagescraperResponse, WebimagescraperErrorBody]:
        """Web Image Scraper is a simple tool for scraping images from a website. It returns the URLs of the images
        found on the website.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webimagescraper"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebimagescraperRequest | V1WebimagescraperRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WebimagescraperResponse],
            error_mapper=webimagescraper_error_mapper,
            request_options=request_options,
        )

    async def webscreenshots(
        self,
        body: V1WebscreenshotsRequest | V1WebscreenshotsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebscreenshotsResponse, WebscreenshotsErrorBody]:
        """Capture a screenshot of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webscreenshots"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebscreenshotsRequest | V1WebscreenshotsRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WebscreenshotsResponse],
            error_mapper=webscreenshots_error_mapper,
            request_options=request_options,
        )
