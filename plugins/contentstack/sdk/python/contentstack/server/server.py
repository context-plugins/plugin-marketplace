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

    def default_contentstack_automate_management_accounts_api(self, path: str) -> UrlTemplate:
        return self.config.default_contentstack_automate_management_accounts_api.resolve(self.environment, path)

    def default_contentstack_assets_api(self, path: str) -> UrlTemplate:
        return self.config.default_contentstack_assets_api.resolve(self.environment, path)

    def default_contentstack_personalize_management_attributes_api(self, path: str) -> UrlTemplate:
        return self.config.default_contentstack_personalize_management_attributes_api.resolve(self.environment, path)

    def default_contentstack_brand_kit_management_brand_kits_api(self, path: str) -> UrlTemplate:
        return self.config.default_contentstack_brand_kit_management_brand_kits_api.resolve(self.environment, path)

    def default_contentstack_environments_api(self, path: str) -> UrlTemplate:
        return self.config.default_contentstack_environments_api.resolve(self.environment, path)

    def default_contentstack_events_api(self, path: str) -> UrlTemplate:
        return self.config.default_contentstack_events_api.resolve(self.environment, path)

    def default_contentstack_projects_api(self, path: str) -> UrlTemplate:
        return self.config.default_contentstack_projects_api.resolve(self.environment, path)

    def default_contentstack_scim_scim_groups_api(self, path: str) -> UrlTemplate:
        return self.config.default_contentstack_scim_scim_groups_api.resolve(self.environment, path)
