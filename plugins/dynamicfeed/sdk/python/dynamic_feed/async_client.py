from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.advisories import AsyncAdvisories
from .apis.agent import AsyncAgent
from .apis.agent_stats import AsyncAgentStats
from .apis.ai_models import AsyncAiModels
from .apis.air_quality import AsyncAirQuality
from .apis.airport_delays import AsyncAirportDelays
from .apis.benchmarks import AsyncBenchmarks
from .apis.billing import AsyncBilling
from .apis.carbon_intensity import AsyncCarbonIntensity
from .apis.china import AsyncChina
from .apis.cite import AsyncCite
from .apis.consensus import AsyncConsensus
from .apis.convert import AsyncConvert
from .apis.countdown import AsyncCountdown
from .apis.dataset import AsyncDataset
from .apis.dev import AsyncDev
from .apis.drought import AsyncDrought
from .apis.drug_shortages import AsyncDrugShortages
from .apis.dynamic_feed_live_data_for_ai import AsyncDynamicFeedLiveDataForAi
from .apis.earthquakes import AsyncEarthquakes
from .apis.energy import AsyncEnergy
from .apis.exploited_vulnerabilities import AsyncExploitedVulnerabilities
from .apis.federal_register import AsyncFederalRegister
from .apis.flights import AsyncFlights
from .apis.forecast import AsyncForecast
from .apis.global_disasters import AsyncGlobalDisasters
from .apis.gps_interference import AsyncGpsInterference
from .apis.health import AsyncHealth
from .apis.history import AsyncHistory
from .apis.info import AsyncInfo
from .apis.internet_outages import AsyncInternetOutages
from .apis.iss import AsyncIss
from .apis.launches import AsyncLaunches
from .apis.macro import AsyncMacro
from .apis.market_hours import AsyncMarketHours
from .apis.models_api import AsyncModelsApi
from .apis.movers import AsyncMovers
from .apis.natural_events import AsyncNaturalEvents
from .apis.news import AsyncNews
from .apis.orbital_datacenters import AsyncOrbitalDatacenters
from .apis.rates import AsyncRates
from .apis.reality_check import AsyncRealityCheck
from .apis.recalls import AsyncRecalls
from .apis.robot import AsyncRobot
from .apis.sanctions import AsyncSanctions
from .apis.satellite import AsyncSatellite
from .apis.satellites import AsyncSatellites
from .apis.sec_filings import AsyncSecFilings
from .apis.security import AsyncSecurity
from .apis.servers import AsyncServers
from .apis.shipping import AsyncShipping
from .apis.signals import AsyncSignals
from .apis.signup import AsyncSignup
from .apis.space_weather import AsyncSpaceWeather
from .apis.sports import AsyncSports
from .apis.status import AsyncStatus
from .apis.tides import AsyncTides
from .apis.time import AsyncTime
from .apis.treasury_yields import AsyncTreasuryYields
from .apis.verified_facts import AsyncVerifiedFacts
from .apis.versions import AsyncVersions
from .apis.volcanoes import AsyncVolcanoes
from .apis.water_levels import AsyncWaterLevels
from .apis.weather import AsyncWeather
from .apis.weather_alerts import AsyncWeatherAlerts
from .apis.whats_new import AsyncWhatsNew
from .apis.wildfires import AsyncWildfires
from .apis.world_pulse import AsyncWorldPulse
from .base_client import DEFAULT_TIMEOUT, BaseDynamicFeedClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    param,
)


class AsyncDynamicFeedClient(BaseDynamicFeedClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
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
                param[str]("User-Agent", "DynamicFeedClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )

    @cached_property
    def advisories(self) -> AsyncAdvisories:
        return AsyncAdvisories(self._raw_client, self._server)

    @cached_property
    def agent(self) -> AsyncAgent:
        return AsyncAgent(self._raw_client, self._server)

    @cached_property
    def agent_stats(self) -> AsyncAgentStats:
        return AsyncAgentStats(self._raw_client, self._server)

    @cached_property
    def ai_models(self) -> AsyncAiModels:
        return AsyncAiModels(self._raw_client, self._server)

    @cached_property
    def air_quality(self) -> AsyncAirQuality:
        return AsyncAirQuality(self._raw_client, self._server)

    @cached_property
    def airport_delays(self) -> AsyncAirportDelays:
        return AsyncAirportDelays(self._raw_client, self._server)

    @cached_property
    def benchmarks(self) -> AsyncBenchmarks:
        return AsyncBenchmarks(self._raw_client, self._server)

    @cached_property
    def billing(self) -> AsyncBilling:
        return AsyncBilling(self._raw_client, self._server)

    @cached_property
    def carbon_intensity(self) -> AsyncCarbonIntensity:
        return AsyncCarbonIntensity(self._raw_client, self._server)

    @cached_property
    def china(self) -> AsyncChina:
        return AsyncChina(self._raw_client, self._server)

    @cached_property
    def cite(self) -> AsyncCite:
        return AsyncCite(self._raw_client, self._server)

    @cached_property
    def consensus(self) -> AsyncConsensus:
        return AsyncConsensus(self._raw_client, self._server)

    @cached_property
    def convert(self) -> AsyncConvert:
        return AsyncConvert(self._raw_client, self._server)

    @cached_property
    def countdown(self) -> AsyncCountdown:
        return AsyncCountdown(self._raw_client, self._server)

    @cached_property
    def dataset(self) -> AsyncDataset:
        return AsyncDataset(self._raw_client, self._server)

    @cached_property
    def dev(self) -> AsyncDev:
        return AsyncDev(self._raw_client, self._server)

    @cached_property
    def drought(self) -> AsyncDrought:
        return AsyncDrought(self._raw_client, self._server)

    @cached_property
    def drug_shortages(self) -> AsyncDrugShortages:
        return AsyncDrugShortages(self._raw_client, self._server)

    @cached_property
    def dynamic_feed_live_data_for_ai(self) -> AsyncDynamicFeedLiveDataForAi:
        return AsyncDynamicFeedLiveDataForAi(self._raw_client, self._server)

    @cached_property
    def earthquakes(self) -> AsyncEarthquakes:
        return AsyncEarthquakes(self._raw_client, self._server)

    @cached_property
    def energy(self) -> AsyncEnergy:
        return AsyncEnergy(self._raw_client, self._server)

    @cached_property
    def exploited_vulnerabilities(self) -> AsyncExploitedVulnerabilities:
        return AsyncExploitedVulnerabilities(self._raw_client, self._server)

    @cached_property
    def federal_register(self) -> AsyncFederalRegister:
        return AsyncFederalRegister(self._raw_client, self._server)

    @cached_property
    def flights(self) -> AsyncFlights:
        return AsyncFlights(self._raw_client, self._server)

    @cached_property
    def forecast(self) -> AsyncForecast:
        return AsyncForecast(self._raw_client, self._server)

    @cached_property
    def global_disasters(self) -> AsyncGlobalDisasters:
        return AsyncGlobalDisasters(self._raw_client, self._server)

    @cached_property
    def gps_interference(self) -> AsyncGpsInterference:
        return AsyncGpsInterference(self._raw_client, self._server)

    @cached_property
    def health(self) -> AsyncHealth:
        return AsyncHealth(self._raw_client, self._server)

    @cached_property
    def history(self) -> AsyncHistory:
        return AsyncHistory(self._raw_client, self._server)

    @cached_property
    def info(self) -> AsyncInfo:
        return AsyncInfo(self._raw_client, self._server)

    @cached_property
    def internet_outages(self) -> AsyncInternetOutages:
        return AsyncInternetOutages(self._raw_client, self._server)

    @cached_property
    def iss(self) -> AsyncIss:
        return AsyncIss(self._raw_client, self._server)

    @cached_property
    def launches(self) -> AsyncLaunches:
        return AsyncLaunches(self._raw_client, self._server)

    @cached_property
    def macro(self) -> AsyncMacro:
        return AsyncMacro(self._raw_client, self._server)

    @cached_property
    def market_hours(self) -> AsyncMarketHours:
        return AsyncMarketHours(self._raw_client, self._server)

    @cached_property
    def models_api(self) -> AsyncModelsApi:
        return AsyncModelsApi(self._raw_client, self._server)

    @cached_property
    def movers(self) -> AsyncMovers:
        return AsyncMovers(self._raw_client, self._server)

    @cached_property
    def natural_events(self) -> AsyncNaturalEvents:
        return AsyncNaturalEvents(self._raw_client, self._server)

    @cached_property
    def news(self) -> AsyncNews:
        return AsyncNews(self._raw_client, self._server)

    @cached_property
    def orbital_datacenters(self) -> AsyncOrbitalDatacenters:
        return AsyncOrbitalDatacenters(self._raw_client, self._server)

    @cached_property
    def rates(self) -> AsyncRates:
        return AsyncRates(self._raw_client, self._server)

    @cached_property
    def reality_check(self) -> AsyncRealityCheck:
        return AsyncRealityCheck(self._raw_client, self._server)

    @cached_property
    def recalls(self) -> AsyncRecalls:
        return AsyncRecalls(self._raw_client, self._server)

    @cached_property
    def robot(self) -> AsyncRobot:
        return AsyncRobot(self._raw_client, self._server)

    @cached_property
    def sanctions(self) -> AsyncSanctions:
        return AsyncSanctions(self._raw_client, self._server)

    @cached_property
    def satellite(self) -> AsyncSatellite:
        return AsyncSatellite(self._raw_client, self._server)

    @cached_property
    def satellites(self) -> AsyncSatellites:
        return AsyncSatellites(self._raw_client, self._server)

    @cached_property
    def sec_filings(self) -> AsyncSecFilings:
        return AsyncSecFilings(self._raw_client, self._server)

    @cached_property
    def security(self) -> AsyncSecurity:
        return AsyncSecurity(self._raw_client, self._server)

    @cached_property
    def servers(self) -> AsyncServers:
        return AsyncServers(self._raw_client, self._server)

    @cached_property
    def shipping(self) -> AsyncShipping:
        return AsyncShipping(self._raw_client, self._server)

    @cached_property
    def signals(self) -> AsyncSignals:
        return AsyncSignals(self._raw_client, self._server)

    @cached_property
    def signup(self) -> AsyncSignup:
        return AsyncSignup(self._raw_client, self._server)

    @cached_property
    def space_weather(self) -> AsyncSpaceWeather:
        return AsyncSpaceWeather(self._raw_client, self._server)

    @cached_property
    def sports(self) -> AsyncSports:
        return AsyncSports(self._raw_client, self._server)

    @cached_property
    def status(self) -> AsyncStatus:
        return AsyncStatus(self._raw_client, self._server)

    @cached_property
    def tides(self) -> AsyncTides:
        return AsyncTides(self._raw_client, self._server)

    @cached_property
    def time(self) -> AsyncTime:
        return AsyncTime(self._raw_client, self._server)

    @cached_property
    def treasury_yields(self) -> AsyncTreasuryYields:
        return AsyncTreasuryYields(self._raw_client, self._server)

    @cached_property
    def versions(self) -> AsyncVersions:
        return AsyncVersions(self._raw_client, self._server)

    @cached_property
    def volcanoes(self) -> AsyncVolcanoes:
        return AsyncVolcanoes(self._raw_client, self._server)

    @cached_property
    def water_levels(self) -> AsyncWaterLevels:
        return AsyncWaterLevels(self._raw_client, self._server)

    @cached_property
    def weather(self) -> AsyncWeather:
        return AsyncWeather(self._raw_client, self._server)

    @cached_property
    def weather_alerts(self) -> AsyncWeatherAlerts:
        return AsyncWeatherAlerts(self._raw_client, self._server)

    @cached_property
    def whats_new(self) -> AsyncWhatsNew:
        return AsyncWhatsNew(self._raw_client, self._server)

    @cached_property
    def wildfires(self) -> AsyncWildfires:
        return AsyncWildfires(self._raw_client, self._server)

    @cached_property
    def world_pulse(self) -> AsyncWorldPulse:
        return AsyncWorldPulse(self._raw_client, self._server)

    @cached_property
    def verified_facts(self) -> AsyncVerifiedFacts:
        return AsyncVerifiedFacts(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncDynamicFeedClient
