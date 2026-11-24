from __future__ import annotations

from pydantic import BaseModel, ConfigDict

from ..core import UrlTemplate, param
from ..models.enums.database import Database
from ..models.enums.environment_model import EnvironmentModel


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.apple-cloudkit.com/database/1/{container}/{environment}/{database}"
    container: str = "iCloud.com.example.myapp"
    environment: EnvironmentModel = EnvironmentModel.DEVELOPMENT
    database: Database = Database.PUBLIC

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(
            base_url=self.base_url,
            path=path,
            variables=[
                param[str]("container", self.container),
                param[EnvironmentModel]("environment", self.environment),
                param[Database]("database", self.database),
            ],
        )
