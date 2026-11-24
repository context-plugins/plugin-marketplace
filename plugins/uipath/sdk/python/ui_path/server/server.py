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

    def default_ui_path_automation_hub_app_inventory_api(self, path: str) -> UrlTemplate:
        return self.config.default_ui_path_automation_hub_app_inventory_api.resolve(self.environment, path)

    def default_ui_path_platform_management_audit_logs_api(self, path: str) -> UrlTemplate:
        return self.config.default_ui_path_platform_management_audit_logs_api.resolve(self.environment, path)

    def default_ui_path_document_understanding_classification_api(self, path: str) -> UrlTemplate:
        return self.config.default_ui_path_document_understanding_classification_api.resolve(self.environment, path)

    def default_ui_path_data_service_entities_api(self, path: str) -> UrlTemplate:
        return self.config.default_ui_path_data_service_entities_api.resolve(self.environment, path)

    def default_ui_path_test_manager_projects_api(self, path: str) -> UrlTemplate:
        return self.config.default_ui_path_test_manager_projects_api.resolve(self.environment, path)
