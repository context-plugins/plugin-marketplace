from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.advisories import Advisories
from .apis.agent import Agent
from .apis.agent_stats import AgentStats
from .apis.ai_models import AiModels
from .apis.air_quality import AirQuality
from .apis.airport_delays import AirportDelays
from .apis.benchmarks import Benchmarks
from .apis.billing import Billing
from .apis.carbon_intensity import CarbonIntensity
from .apis.china import China
from .apis.cite import Cite
from .apis.consensus import Consensus
from .apis.convert import Convert
from .apis.countdown import Countdown
from .apis.dataset import Dataset
from .apis.dev import Dev
from .apis.drought import Drought
from .apis.drug_shortages import DrugShortages
from .apis.dynamic_feed_live_data_for_ai import DynamicFeedLiveDataForAi
from .apis.earthquakes import Earthquakes
from .apis.energy import Energy
from .apis.exploited_vulnerabilities import ExploitedVulnerabilities
from .apis.federal_register import FederalRegister
from .apis.flights import Flights
from .apis.forecast import Forecast
from .apis.global_disasters import GlobalDisasters
from .apis.gps_interference import GpsInterference
from .apis.health import Health
from .apis.history import History
from .apis.info import Info
from .apis.internet_outages import InternetOutages
from .apis.iss import Iss
from .apis.launches import Launches
from .apis.macro import Macro
from .apis.market_hours import MarketHours
from .apis.models_api import ModelsApi
from .apis.movers import Movers
from .apis.natural_events import NaturalEvents
from .apis.news import News
from .apis.orbital_datacenters import OrbitalDatacenters
from .apis.rates import Rates
from .apis.reality_check import RealityCheck
from .apis.recalls import Recalls
from .apis.robot import Robot
from .apis.sanctions import Sanctions
from .apis.satellite import Satellite
from .apis.satellites import Satellites
from .apis.sec_filings import SecFilings
from .apis.security import Security
from .apis.servers import Servers
from .apis.shipping import Shipping
from .apis.signals import Signals
from .apis.signup import Signup
from .apis.space_weather import SpaceWeather
from .apis.sports import Sports
from .apis.status import Status
from .apis.tides import Tides
from .apis.time import Time
from .apis.treasury_yields import TreasuryYields
from .apis.verified_facts import VerifiedFacts
from .apis.versions import Versions
from .apis.volcanoes import Volcanoes
from .apis.water_levels import WaterLevels
from .apis.weather import Weather
from .apis.weather_alerts import WeatherAlerts
from .apis.whats_new import WhatsNew
from .apis.wildfires import Wildfires
from .apis.world_pulse import WorldPulse
from .base_client import DEFAULT_TIMEOUT, BaseDynamicFeedClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    param,
)


class DynamicFeedClient(BaseDynamicFeedClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
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
                param[str]("User-Agent", "DynamicFeedClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )

    @cached_property
    def advisories(self) -> Advisories:
        return Advisories(self._raw_client, self._server)

    @cached_property
    def agent(self) -> Agent:
        return Agent(self._raw_client, self._server)

    @cached_property
    def agent_stats(self) -> AgentStats:
        return AgentStats(self._raw_client, self._server)

    @cached_property
    def ai_models(self) -> AiModels:
        return AiModels(self._raw_client, self._server)

    @cached_property
    def air_quality(self) -> AirQuality:
        return AirQuality(self._raw_client, self._server)

    @cached_property
    def airport_delays(self) -> AirportDelays:
        return AirportDelays(self._raw_client, self._server)

    @cached_property
    def benchmarks(self) -> Benchmarks:
        return Benchmarks(self._raw_client, self._server)

    @cached_property
    def billing(self) -> Billing:
        return Billing(self._raw_client, self._server)

    @cached_property
    def carbon_intensity(self) -> CarbonIntensity:
        return CarbonIntensity(self._raw_client, self._server)

    @cached_property
    def china(self) -> China:
        return China(self._raw_client, self._server)

    @cached_property
    def cite(self) -> Cite:
        return Cite(self._raw_client, self._server)

    @cached_property
    def consensus(self) -> Consensus:
        return Consensus(self._raw_client, self._server)

    @cached_property
    def convert(self) -> Convert:
        return Convert(self._raw_client, self._server)

    @cached_property
    def countdown(self) -> Countdown:
        return Countdown(self._raw_client, self._server)

    @cached_property
    def dataset(self) -> Dataset:
        return Dataset(self._raw_client, self._server)

    @cached_property
    def dev(self) -> Dev:
        return Dev(self._raw_client, self._server)

    @cached_property
    def drought(self) -> Drought:
        return Drought(self._raw_client, self._server)

    @cached_property
    def drug_shortages(self) -> DrugShortages:
        return DrugShortages(self._raw_client, self._server)

    @cached_property
    def dynamic_feed_live_data_for_ai(self) -> DynamicFeedLiveDataForAi:
        return DynamicFeedLiveDataForAi(self._raw_client, self._server)

    @cached_property
    def earthquakes(self) -> Earthquakes:
        return Earthquakes(self._raw_client, self._server)

    @cached_property
    def energy(self) -> Energy:
        return Energy(self._raw_client, self._server)

    @cached_property
    def exploited_vulnerabilities(self) -> ExploitedVulnerabilities:
        return ExploitedVulnerabilities(self._raw_client, self._server)

    @cached_property
    def federal_register(self) -> FederalRegister:
        return FederalRegister(self._raw_client, self._server)

    @cached_property
    def flights(self) -> Flights:
        return Flights(self._raw_client, self._server)

    @cached_property
    def forecast(self) -> Forecast:
        return Forecast(self._raw_client, self._server)

    @cached_property
    def global_disasters(self) -> GlobalDisasters:
        return GlobalDisasters(self._raw_client, self._server)

    @cached_property
    def gps_interference(self) -> GpsInterference:
        return GpsInterference(self._raw_client, self._server)

    @cached_property
    def health(self) -> Health:
        return Health(self._raw_client, self._server)

    @cached_property
    def history(self) -> History:
        return History(self._raw_client, self._server)

    @cached_property
    def info(self) -> Info:
        return Info(self._raw_client, self._server)

    @cached_property
    def internet_outages(self) -> InternetOutages:
        return InternetOutages(self._raw_client, self._server)

    @cached_property
    def iss(self) -> Iss:
        return Iss(self._raw_client, self._server)

    @cached_property
    def launches(self) -> Launches:
        return Launches(self._raw_client, self._server)

    @cached_property
    def macro(self) -> Macro:
        return Macro(self._raw_client, self._server)

    @cached_property
    def market_hours(self) -> MarketHours:
        return MarketHours(self._raw_client, self._server)

    @cached_property
    def models_api(self) -> ModelsApi:
        return ModelsApi(self._raw_client, self._server)

    @cached_property
    def movers(self) -> Movers:
        return Movers(self._raw_client, self._server)

    @cached_property
    def natural_events(self) -> NaturalEvents:
        return NaturalEvents(self._raw_client, self._server)

    @cached_property
    def news(self) -> News:
        return News(self._raw_client, self._server)

    @cached_property
    def orbital_datacenters(self) -> OrbitalDatacenters:
        return OrbitalDatacenters(self._raw_client, self._server)

    @cached_property
    def rates(self) -> Rates:
        return Rates(self._raw_client, self._server)

    @cached_property
    def reality_check(self) -> RealityCheck:
        return RealityCheck(self._raw_client, self._server)

    @cached_property
    def recalls(self) -> Recalls:
        return Recalls(self._raw_client, self._server)

    @cached_property
    def robot(self) -> Robot:
        return Robot(self._raw_client, self._server)

    @cached_property
    def sanctions(self) -> Sanctions:
        return Sanctions(self._raw_client, self._server)

    @cached_property
    def satellite(self) -> Satellite:
        return Satellite(self._raw_client, self._server)

    @cached_property
    def satellites(self) -> Satellites:
        return Satellites(self._raw_client, self._server)

    @cached_property
    def sec_filings(self) -> SecFilings:
        return SecFilings(self._raw_client, self._server)

    @cached_property
    def security(self) -> Security:
        return Security(self._raw_client, self._server)

    @cached_property
    def servers(self) -> Servers:
        return Servers(self._raw_client, self._server)

    @cached_property
    def shipping(self) -> Shipping:
        return Shipping(self._raw_client, self._server)

    @cached_property
    def signals(self) -> Signals:
        return Signals(self._raw_client, self._server)

    @cached_property
    def signup(self) -> Signup:
        return Signup(self._raw_client, self._server)

    @cached_property
    def space_weather(self) -> SpaceWeather:
        return SpaceWeather(self._raw_client, self._server)

    @cached_property
    def sports(self) -> Sports:
        return Sports(self._raw_client, self._server)

    @cached_property
    def status(self) -> Status:
        return Status(self._raw_client, self._server)

    @cached_property
    def tides(self) -> Tides:
        return Tides(self._raw_client, self._server)

    @cached_property
    def time(self) -> Time:
        return Time(self._raw_client, self._server)

    @cached_property
    def treasury_yields(self) -> TreasuryYields:
        return TreasuryYields(self._raw_client, self._server)

    @cached_property
    def versions(self) -> Versions:
        return Versions(self._raw_client, self._server)

    @cached_property
    def volcanoes(self) -> Volcanoes:
        return Volcanoes(self._raw_client, self._server)

    @cached_property
    def water_levels(self) -> WaterLevels:
        return WaterLevels(self._raw_client, self._server)

    @cached_property
    def weather(self) -> Weather:
        return Weather(self._raw_client, self._server)

    @cached_property
    def weather_alerts(self) -> WeatherAlerts:
        return WeatherAlerts(self._raw_client, self._server)

    @cached_property
    def whats_new(self) -> WhatsNew:
        return WhatsNew(self._raw_client, self._server)

    @cached_property
    def wildfires(self) -> Wildfires:
        return Wildfires(self._raw_client, self._server)

    @cached_property
    def world_pulse(self) -> WorldPulse:
        return WorldPulse(self._raw_client, self._server)

    @cached_property
    def verified_facts(self) -> VerifiedFacts:
        return VerifiedFacts(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = DynamicFeedClient
