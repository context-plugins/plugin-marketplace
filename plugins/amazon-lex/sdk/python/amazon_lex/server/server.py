from __future__ import annotations

from dataclasses import dataclass

from ..core import UrlTemplate
from .environment import Environment
from .server_config import ServerConfig


@dataclass(frozen=True, slots=True)
class Server:
    environment: Environment
    config: ServerConfig

    def default(self, path: str) -> UrlTemplate:
        return self.config.default.resolve(self.environment, path)

    def default_amazon_lex_model_building_v2_bots_api(self, path: str) -> UrlTemplate:
        return self.config.default_amazon_lex_model_building_v2_bots_api.resolve(self.environment, path)

    def default_amazon_lex_model_building_v2_builtins_api(self, path: str) -> UrlTemplate:
        return self.config.default_amazon_lex_model_building_v2_builtins_api.resolve(self.environment, path)

    def default_amazon_lex_model_building_v2_exports_api(self, path: str) -> UrlTemplate:
        return self.config.default_amazon_lex_model_building_v2_exports_api.resolve(self.environment, path)

    def default_amazon_lex_model_building_v2_operations_api(self, path: str) -> UrlTemplate:
        return self.config.default_amazon_lex_model_building_v2_operations_api.resolve(self.environment, path)

    def default_amazon_lex_model_building_v2_tags_api(self, path: str) -> UrlTemplate:
        return self.config.default_amazon_lex_model_building_v2_tags_api.resolve(self.environment, path)
