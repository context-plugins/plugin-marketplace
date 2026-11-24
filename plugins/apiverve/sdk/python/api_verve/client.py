from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.ai_computer_vision import AiComputerVision
from .apis.astrology import Astrology
from .apis.calendar import Calendar
from .apis.data_conversion import DataConversion
from .apis.data_generation import DataGeneration
from .apis.data_lookup import DataLookup
from .apis.data_processing import DataProcessing
from .apis.data_scraping import DataScraping
from .apis.data_validation import DataValidation
from .apis.documents import Documents
from .apis.domain_data import DomainData
from .apis.entertainment import Entertainment
from .apis.finance import Finance
from .apis.food import Food
from .apis.games import Games
from .apis.geography import Geography
from .apis.health_wellness import HealthWellness
from .apis.images import Images
from .apis.lifestyle import Lifestyle
from .apis.math_calculations import MathCalculations
from .apis.networking import Networking
from .apis.news import News
from .apis.parsers import Parsers
from .apis.reference_data import ReferenceData
from .apis.science import Science
from .apis.security import Security
from .apis.text_processing import TextProcessing
from .apis.transportation import Transportation
from .apis.weather import Weather
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseApiVerveClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    no_auth,
    param,
)


class ApiVerveClient(BaseApiVerveClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key: str | None = None,
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
                param[str]("User-Agent", "ApiVerveClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(api_key=ApiKeyHeaderScheme("x-api-key", api_key) if api_key is not None else no_auth)

    @cached_property
    def ai_computer_vision(self) -> AiComputerVision:
        return AiComputerVision(self._raw_client, self._server, self._auth)

    @cached_property
    def astrology(self) -> Astrology:
        return Astrology(self._raw_client, self._server, self._auth)

    @cached_property
    def calendar(self) -> Calendar:
        return Calendar(self._raw_client, self._server, self._auth)

    @cached_property
    def data_conversion(self) -> DataConversion:
        return DataConversion(self._raw_client, self._server, self._auth)

    @cached_property
    def data_generation(self) -> DataGeneration:
        return DataGeneration(self._raw_client, self._server, self._auth)

    @cached_property
    def data_lookup(self) -> DataLookup:
        return DataLookup(self._raw_client, self._server, self._auth)

    @cached_property
    def data_processing(self) -> DataProcessing:
        return DataProcessing(self._raw_client, self._server, self._auth)

    @cached_property
    def data_scraping(self) -> DataScraping:
        return DataScraping(self._raw_client, self._server, self._auth)

    @cached_property
    def data_validation(self) -> DataValidation:
        return DataValidation(self._raw_client, self._server, self._auth)

    @cached_property
    def documents(self) -> Documents:
        return Documents(self._raw_client, self._server, self._auth)

    @cached_property
    def domain_data(self) -> DomainData:
        return DomainData(self._raw_client, self._server, self._auth)

    @cached_property
    def entertainment(self) -> Entertainment:
        return Entertainment(self._raw_client, self._server, self._auth)

    @cached_property
    def finance(self) -> Finance:
        return Finance(self._raw_client, self._server, self._auth)

    @cached_property
    def food(self) -> Food:
        return Food(self._raw_client, self._server, self._auth)

    @cached_property
    def games(self) -> Games:
        return Games(self._raw_client, self._server, self._auth)

    @cached_property
    def geography(self) -> Geography:
        return Geography(self._raw_client, self._server, self._auth)

    @cached_property
    def health_wellness(self) -> HealthWellness:
        return HealthWellness(self._raw_client, self._server, self._auth)

    @cached_property
    def images(self) -> Images:
        return Images(self._raw_client, self._server, self._auth)

    @cached_property
    def lifestyle(self) -> Lifestyle:
        return Lifestyle(self._raw_client, self._server, self._auth)

    @cached_property
    def math_calculations(self) -> MathCalculations:
        return MathCalculations(self._raw_client, self._server, self._auth)

    @cached_property
    def networking(self) -> Networking:
        return Networking(self._raw_client, self._server, self._auth)

    @cached_property
    def news(self) -> News:
        return News(self._raw_client, self._server, self._auth)

    @cached_property
    def parsers(self) -> Parsers:
        return Parsers(self._raw_client, self._server, self._auth)

    @cached_property
    def reference_data(self) -> ReferenceData:
        return ReferenceData(self._raw_client, self._server, self._auth)

    @cached_property
    def science(self) -> Science:
        return Science(self._raw_client, self._server, self._auth)

    @cached_property
    def security(self) -> Security:
        return Security(self._raw_client, self._server, self._auth)

    @cached_property
    def text_processing(self) -> TextProcessing:
        return TextProcessing(self._raw_client, self._server, self._auth)

    @cached_property
    def transportation(self) -> Transportation:
        return Transportation(self._raw_client, self._server, self._auth)

    @cached_property
    def weather(self) -> Weather:
        return Weather(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = ApiVerveClient
