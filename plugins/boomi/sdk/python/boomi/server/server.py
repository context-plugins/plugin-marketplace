from __future__ import annotations

from dataclasses import dataclass

from ..core import UrlTemplate
from .server_config import ServerConfig


@dataclass(frozen=True, slots=True)
class Server:
    config: ServerConfig

    def default(self, path: str) -> UrlTemplate:
        return self.config.default.resolve(path)

    def default_boomi_data_hub_golden_records_api(self, path: str) -> UrlTemplate:
        return self.config.default_boomi_data_hub_golden_records_api.resolve(path)

    def default_boomi_event_streams_rest_messages_api(self, path: str) -> UrlTemplate:
        return self.config.default_boomi_event_streams_rest_messages_api.resolve(path)
