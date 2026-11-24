from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.ai_computer_vision import AsyncAiComputerVision
from .apis.astrology import AsyncAstrology
from .apis.calendar import AsyncCalendar
from .apis.data_conversion import AsyncDataConversion
from .apis.data_generation import AsyncDataGeneration
from .apis.data_lookup import AsyncDataLookup
from .apis.data_processing import AsyncDataProcessing
from .apis.data_scraping import AsyncDataScraping
from .apis.data_validation import AsyncDataValidation
from .apis.documents import AsyncDocuments
from .apis.domain_data import AsyncDomainData
from .apis.entertainment import AsyncEntertainment
from .apis.finance import AsyncFinance
from .apis.food import AsyncFood
from .apis.games import AsyncGames
from .apis.geography import AsyncGeography
from .apis.health_wellness import AsyncHealthWellness
from .apis.images import AsyncImages
from .apis.lifestyle import AsyncLifestyle
from .apis.math_calculations import AsyncMathCalculations
from .apis.networking import AsyncNetworking
from .apis.news import AsyncNews
from .apis.parsers import AsyncParsers
from .apis.reference_data import AsyncReferenceData
from .apis.science import AsyncScience
from .apis.security import AsyncSecurity
from .apis.text_processing import AsyncTextProcessing
from .apis.transportation import AsyncTransportation
from .apis.weather import AsyncWeather
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseApiVerveClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncApiVerveClient(BaseApiVerveClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "ApiVerveClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key=ApiKeyHeaderScheme("x-api-key", api_key) if api_key is not None else no_auth
        )

    @cached_property
    def ai_computer_vision(self) -> AsyncAiComputerVision:
        return AsyncAiComputerVision(self._raw_client, self._server, self._auth)

    @cached_property
    def astrology(self) -> AsyncAstrology:
        return AsyncAstrology(self._raw_client, self._server, self._auth)

    @cached_property
    def calendar(self) -> AsyncCalendar:
        return AsyncCalendar(self._raw_client, self._server, self._auth)

    @cached_property
    def data_conversion(self) -> AsyncDataConversion:
        return AsyncDataConversion(self._raw_client, self._server, self._auth)

    @cached_property
    def data_generation(self) -> AsyncDataGeneration:
        return AsyncDataGeneration(self._raw_client, self._server, self._auth)

    @cached_property
    def data_lookup(self) -> AsyncDataLookup:
        return AsyncDataLookup(self._raw_client, self._server, self._auth)

    @cached_property
    def data_processing(self) -> AsyncDataProcessing:
        return AsyncDataProcessing(self._raw_client, self._server, self._auth)

    @cached_property
    def data_scraping(self) -> AsyncDataScraping:
        return AsyncDataScraping(self._raw_client, self._server, self._auth)

    @cached_property
    def data_validation(self) -> AsyncDataValidation:
        return AsyncDataValidation(self._raw_client, self._server, self._auth)

    @cached_property
    def documents(self) -> AsyncDocuments:
        return AsyncDocuments(self._raw_client, self._server, self._auth)

    @cached_property
    def domain_data(self) -> AsyncDomainData:
        return AsyncDomainData(self._raw_client, self._server, self._auth)

    @cached_property
    def entertainment(self) -> AsyncEntertainment:
        return AsyncEntertainment(self._raw_client, self._server, self._auth)

    @cached_property
    def finance(self) -> AsyncFinance:
        return AsyncFinance(self._raw_client, self._server, self._auth)

    @cached_property
    def food(self) -> AsyncFood:
        return AsyncFood(self._raw_client, self._server, self._auth)

    @cached_property
    def games(self) -> AsyncGames:
        return AsyncGames(self._raw_client, self._server, self._auth)

    @cached_property
    def geography(self) -> AsyncGeography:
        return AsyncGeography(self._raw_client, self._server, self._auth)

    @cached_property
    def health_wellness(self) -> AsyncHealthWellness:
        return AsyncHealthWellness(self._raw_client, self._server, self._auth)

    @cached_property
    def images(self) -> AsyncImages:
        return AsyncImages(self._raw_client, self._server, self._auth)

    @cached_property
    def lifestyle(self) -> AsyncLifestyle:
        return AsyncLifestyle(self._raw_client, self._server, self._auth)

    @cached_property
    def math_calculations(self) -> AsyncMathCalculations:
        return AsyncMathCalculations(self._raw_client, self._server, self._auth)

    @cached_property
    def networking(self) -> AsyncNetworking:
        return AsyncNetworking(self._raw_client, self._server, self._auth)

    @cached_property
    def news(self) -> AsyncNews:
        return AsyncNews(self._raw_client, self._server, self._auth)

    @cached_property
    def parsers(self) -> AsyncParsers:
        return AsyncParsers(self._raw_client, self._server, self._auth)

    @cached_property
    def reference_data(self) -> AsyncReferenceData:
        return AsyncReferenceData(self._raw_client, self._server, self._auth)

    @cached_property
    def science(self) -> AsyncScience:
        return AsyncScience(self._raw_client, self._server, self._auth)

    @cached_property
    def security(self) -> AsyncSecurity:
        return AsyncSecurity(self._raw_client, self._server, self._auth)

    @cached_property
    def text_processing(self) -> AsyncTextProcessing:
        return AsyncTextProcessing(self._raw_client, self._server, self._auth)

    @cached_property
    def transportation(self) -> AsyncTransportation:
        return AsyncTransportation(self._raw_client, self._server, self._auth)

    @cached_property
    def weather(self) -> AsyncWeather:
        return AsyncWeather(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncApiVerveClient
