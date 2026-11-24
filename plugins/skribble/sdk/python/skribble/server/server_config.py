from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate
from .environment import Environment


class DefaultProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://document-validation.skribble.com/v1"


class DefaultEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://document-validation.skribble.de/v1"


class DefaultEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultProductionConfig = Field(default_factory=DefaultProductionConfig)
    environment2: DefaultEnvironment2Config = Field(default_factory=DefaultEnvironment2Config)
    environment3: DefaultEnvironment3Config = Field(default_factory=DefaultEnvironment3Config)
    environment4: DefaultEnvironment4Config = Field(default_factory=DefaultEnvironment4Config)
    environment5: DefaultEnvironment5Config = Field(default_factory=DefaultEnvironment5Config)
    environment6: DefaultEnvironment6Config = Field(default_factory=DefaultEnvironment6Config)

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultConfigDict(TypedDict):
    production: NotRequired[DefaultProductionConfigDict]
    environment2: NotRequired[DefaultEnvironment2ConfigDict]
    environment3: NotRequired[DefaultEnvironment3ConfigDict]
    environment4: NotRequired[DefaultEnvironment4ConfigDict]
    environment5: NotRequired[DefaultEnvironment5ConfigDict]
    environment6: NotRequired[DefaultEnvironment6ConfigDict]


class DefaultSkribbleAdditionalInformationApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://document-validation.skribble.com/v1"


class DefaultSkribbleAdditionalInformationApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleAdditionalInformationApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://document-validation.skribble.de/v1"


class DefaultSkribbleAdditionalInformationApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleAdditionalInformationApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://document-validation.skribble.com/v1"


class DefaultSkribbleAdditionalInformationApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleAdditionalInformationApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://document-validation.skribble.com/v1"


class DefaultSkribbleAdditionalInformationApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleAdditionalInformationApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://document-validation.skribble.com/v1"


class DefaultSkribbleAdditionalInformationApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleAdditionalInformationApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://document-validation.skribble.com/v1"


class DefaultSkribbleAdditionalInformationApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleAdditionalInformationApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleAdditionalInformationApiProductionConfig = Field(
        default_factory=DefaultSkribbleAdditionalInformationApiProductionConfig
    )
    environment2: DefaultSkribbleAdditionalInformationApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleAdditionalInformationApiEnvironment2Config
    )
    environment3: DefaultSkribbleAdditionalInformationApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleAdditionalInformationApiEnvironment3Config
    )
    environment4: DefaultSkribbleAdditionalInformationApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleAdditionalInformationApiEnvironment4Config
    )
    environment5: DefaultSkribbleAdditionalInformationApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleAdditionalInformationApiEnvironment5Config
    )
    environment6: DefaultSkribbleAdditionalInformationApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleAdditionalInformationApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleAdditionalInformationApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleAdditionalInformationApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleAdditionalInformationApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleAdditionalInformationApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleAdditionalInformationApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleAdditionalInformationApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleAdditionalInformationApiEnvironment6ConfigDict]


class DefaultSkribbleDocumentApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleDocumentApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleDocumentApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleDocumentApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleDocumentApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleDocumentApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleDocumentApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleDocumentApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleDocumentApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleDocumentApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleDocumentApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleDocumentApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleDocumentApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleDocumentApiProductionConfig = Field(
        default_factory=DefaultSkribbleDocumentApiProductionConfig
    )
    environment2: DefaultSkribbleDocumentApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleDocumentApiEnvironment2Config
    )
    environment3: DefaultSkribbleDocumentApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleDocumentApiEnvironment3Config
    )
    environment4: DefaultSkribbleDocumentApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleDocumentApiEnvironment4Config
    )
    environment5: DefaultSkribbleDocumentApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleDocumentApiEnvironment5Config
    )
    environment6: DefaultSkribbleDocumentApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleDocumentApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleDocumentApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleDocumentApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleDocumentApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleDocumentApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleDocumentApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleDocumentApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleDocumentApiEnvironment6ConfigDict]


class DefaultSkribbleIdentificationApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleIdentificationApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleIdentificationApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleIdentificationApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleIdentificationApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleIdentificationApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleIdentificationApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleIdentificationApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleIdentificationApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleIdentificationApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleIdentificationApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleIdentificationApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleIdentificationApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleIdentificationApiProductionConfig = Field(
        default_factory=DefaultSkribbleIdentificationApiProductionConfig
    )
    environment2: DefaultSkribbleIdentificationApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleIdentificationApiEnvironment2Config
    )
    environment3: DefaultSkribbleIdentificationApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleIdentificationApiEnvironment3Config
    )
    environment4: DefaultSkribbleIdentificationApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleIdentificationApiEnvironment4Config
    )
    environment5: DefaultSkribbleIdentificationApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleIdentificationApiEnvironment5Config
    )
    environment6: DefaultSkribbleIdentificationApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleIdentificationApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleIdentificationApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleIdentificationApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleIdentificationApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleIdentificationApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleIdentificationApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleIdentificationApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleIdentificationApiEnvironment6ConfigDict]


class DefaultSkribbleMonitoringApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleMonitoringApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleMonitoringApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleMonitoringApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleMonitoringApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleMonitoringApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleMonitoringApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleMonitoringApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleMonitoringApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleMonitoringApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleMonitoringApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleMonitoringApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleMonitoringApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleMonitoringApiProductionConfig = Field(
        default_factory=DefaultSkribbleMonitoringApiProductionConfig
    )
    environment2: DefaultSkribbleMonitoringApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleMonitoringApiEnvironment2Config
    )
    environment3: DefaultSkribbleMonitoringApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleMonitoringApiEnvironment3Config
    )
    environment4: DefaultSkribbleMonitoringApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleMonitoringApiEnvironment4Config
    )
    environment5: DefaultSkribbleMonitoringApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleMonitoringApiEnvironment5Config
    )
    environment6: DefaultSkribbleMonitoringApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleMonitoringApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleMonitoringApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleMonitoringApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleMonitoringApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleMonitoringApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleMonitoringApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleMonitoringApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleMonitoringApiEnvironment6ConfigDict]


class DefaultSkribbleReportApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleReportApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleReportApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleReportApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleReportApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleReportApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleReportApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleReportApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleReportApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleReportApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleReportApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleReportApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleReportApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleReportApiProductionConfig = Field(
        default_factory=DefaultSkribbleReportApiProductionConfig
    )
    environment2: DefaultSkribbleReportApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleReportApiEnvironment2Config
    )
    environment3: DefaultSkribbleReportApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleReportApiEnvironment3Config
    )
    environment4: DefaultSkribbleReportApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleReportApiEnvironment4Config
    )
    environment5: DefaultSkribbleReportApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleReportApiEnvironment5Config
    )
    environment6: DefaultSkribbleReportApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleReportApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleReportApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleReportApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleReportApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleReportApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleReportApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleReportApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleReportApiEnvironment6ConfigDict]


class DefaultSkribbleSealApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSealApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSealApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleSealApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSealApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleSealApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSealApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleSealApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSealApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSealApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSealApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSealApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSealApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleSealApiProductionConfig = Field(default_factory=DefaultSkribbleSealApiProductionConfig)
    environment2: DefaultSkribbleSealApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleSealApiEnvironment2Config
    )
    environment3: DefaultSkribbleSealApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleSealApiEnvironment3Config
    )
    environment4: DefaultSkribbleSealApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleSealApiEnvironment4Config
    )
    environment5: DefaultSkribbleSealApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleSealApiEnvironment5Config
    )
    environment6: DefaultSkribbleSealApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleSealApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleSealApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleSealApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleSealApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleSealApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleSealApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleSealApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleSealApiEnvironment6ConfigDict]


class DefaultSkribbleSendToApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSendToApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSendToApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleSendToApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSendToApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleSendToApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSendToApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleSendToApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSendToApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSendToApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSendToApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSendToApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSendToApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleSendToApiProductionConfig = Field(
        default_factory=DefaultSkribbleSendToApiProductionConfig
    )
    environment2: DefaultSkribbleSendToApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleSendToApiEnvironment2Config
    )
    environment3: DefaultSkribbleSendToApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleSendToApiEnvironment3Config
    )
    environment4: DefaultSkribbleSendToApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleSendToApiEnvironment4Config
    )
    environment5: DefaultSkribbleSendToApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleSendToApiEnvironment5Config
    )
    environment6: DefaultSkribbleSendToApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleSendToApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleSendToApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleSendToApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleSendToApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleSendToApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleSendToApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleSendToApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleSendToApiEnvironment6ConfigDict]


class DefaultSkribbleSignatureApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleSignatureApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleSignatureApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleSignatureApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleSignatureApiProductionConfig = Field(
        default_factory=DefaultSkribbleSignatureApiProductionConfig
    )
    environment2: DefaultSkribbleSignatureApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleSignatureApiEnvironment2Config
    )
    environment3: DefaultSkribbleSignatureApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleSignatureApiEnvironment3Config
    )
    environment4: DefaultSkribbleSignatureApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleSignatureApiEnvironment4Config
    )
    environment5: DefaultSkribbleSignatureApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleSignatureApiEnvironment5Config
    )
    environment6: DefaultSkribbleSignatureApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleSignatureApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleSignatureApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleSignatureApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleSignatureApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleSignatureApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleSignatureApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleSignatureApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleSignatureApiEnvironment6ConfigDict]


class DefaultSkribbleSignatureAttachmentApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureAttachmentApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureAttachmentApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleSignatureAttachmentApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureAttachmentApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleSignatureAttachmentApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureAttachmentApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleSignatureAttachmentApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureAttachmentApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureAttachmentApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureAttachmentApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureAttachmentApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureAttachmentApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleSignatureAttachmentApiProductionConfig = Field(
        default_factory=DefaultSkribbleSignatureAttachmentApiProductionConfig
    )
    environment2: DefaultSkribbleSignatureAttachmentApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleSignatureAttachmentApiEnvironment2Config
    )
    environment3: DefaultSkribbleSignatureAttachmentApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleSignatureAttachmentApiEnvironment3Config
    )
    environment4: DefaultSkribbleSignatureAttachmentApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleSignatureAttachmentApiEnvironment4Config
    )
    environment5: DefaultSkribbleSignatureAttachmentApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleSignatureAttachmentApiEnvironment5Config
    )
    environment6: DefaultSkribbleSignatureAttachmentApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleSignatureAttachmentApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleSignatureAttachmentApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleSignatureAttachmentApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleSignatureAttachmentApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleSignatureAttachmentApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleSignatureAttachmentApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleSignatureAttachmentApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleSignatureAttachmentApiEnvironment6ConfigDict]


class DefaultSkribbleSignatureHandlingApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureHandlingApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureHandlingApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleSignatureHandlingApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureHandlingApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleSignatureHandlingApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureHandlingApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleSignatureHandlingApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureHandlingApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureHandlingApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureHandlingApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureHandlingApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureHandlingApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleSignatureHandlingApiProductionConfig = Field(
        default_factory=DefaultSkribbleSignatureHandlingApiProductionConfig
    )
    environment2: DefaultSkribbleSignatureHandlingApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleSignatureHandlingApiEnvironment2Config
    )
    environment3: DefaultSkribbleSignatureHandlingApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleSignatureHandlingApiEnvironment3Config
    )
    environment4: DefaultSkribbleSignatureHandlingApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleSignatureHandlingApiEnvironment4Config
    )
    environment5: DefaultSkribbleSignatureHandlingApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleSignatureHandlingApiEnvironment5Config
    )
    environment6: DefaultSkribbleSignatureHandlingApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleSignatureHandlingApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleSignatureHandlingApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleSignatureHandlingApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleSignatureHandlingApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleSignatureHandlingApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleSignatureHandlingApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleSignatureHandlingApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleSignatureHandlingApiEnvironment6ConfigDict]


class DefaultSkribbleSignatureSignerApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureSignerApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureSignerApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleSignatureSignerApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureSignerApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleSignatureSignerApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureSignerApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleSignatureSignerApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureSignerApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureSignerApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureSignerApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleSignatureSignerApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleSignatureSignerApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleSignatureSignerApiProductionConfig = Field(
        default_factory=DefaultSkribbleSignatureSignerApiProductionConfig
    )
    environment2: DefaultSkribbleSignatureSignerApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleSignatureSignerApiEnvironment2Config
    )
    environment3: DefaultSkribbleSignatureSignerApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleSignatureSignerApiEnvironment3Config
    )
    environment4: DefaultSkribbleSignatureSignerApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleSignatureSignerApiEnvironment4Config
    )
    environment5: DefaultSkribbleSignatureSignerApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleSignatureSignerApiEnvironment5Config
    )
    environment6: DefaultSkribbleSignatureSignerApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleSignatureSignerApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleSignatureSignerApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleSignatureSignerApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleSignatureSignerApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleSignatureSignerApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleSignatureSignerApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleSignatureSignerApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleSignatureSignerApiEnvironment6ConfigDict]


class DefaultSkribbleUserApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleUserApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleUserApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v3"


class DefaultSkribbleUserApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleUserApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v2"


class DefaultSkribbleUserApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleUserApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.de/v2"


class DefaultSkribbleUserApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleUserApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleUserApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleUserApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.skribble.com/v3"


class DefaultSkribbleUserApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultSkribbleUserApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultSkribbleUserApiProductionConfig = Field(default_factory=DefaultSkribbleUserApiProductionConfig)
    environment2: DefaultSkribbleUserApiEnvironment2Config = Field(
        default_factory=DefaultSkribbleUserApiEnvironment2Config
    )
    environment3: DefaultSkribbleUserApiEnvironment3Config = Field(
        default_factory=DefaultSkribbleUserApiEnvironment3Config
    )
    environment4: DefaultSkribbleUserApiEnvironment4Config = Field(
        default_factory=DefaultSkribbleUserApiEnvironment4Config
    )
    environment5: DefaultSkribbleUserApiEnvironment5Config = Field(
        default_factory=DefaultSkribbleUserApiEnvironment5Config
    )
    environment6: DefaultSkribbleUserApiEnvironment6Config = Field(
        default_factory=DefaultSkribbleUserApiEnvironment6Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(base_url=production.base_url, path=path)
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(base_url=environment2.base_url, path=path)
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(base_url=environment3.base_url, path=path)
        if environment == "environment4":
            environment4 = self.environment4
            return UrlTemplate(base_url=environment4.base_url, path=path)
        if environment == "environment5":
            environment5 = self.environment5
            return UrlTemplate(base_url=environment5.base_url, path=path)
        environment6 = self.environment6
        return UrlTemplate(base_url=environment6.base_url, path=path)


class DefaultSkribbleUserApiConfigDict(TypedDict):
    production: NotRequired[DefaultSkribbleUserApiProductionConfigDict]
    environment2: NotRequired[DefaultSkribbleUserApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultSkribbleUserApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultSkribbleUserApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultSkribbleUserApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultSkribbleUserApiEnvironment6ConfigDict]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_skribble_additional_information_api: DefaultSkribbleAdditionalInformationApiConfig = Field(
        default_factory=DefaultSkribbleAdditionalInformationApiConfig
    )
    default_skribble_document_api: DefaultSkribbleDocumentApiConfig = Field(
        default_factory=DefaultSkribbleDocumentApiConfig
    )
    default_skribble_identification_api: DefaultSkribbleIdentificationApiConfig = Field(
        default_factory=DefaultSkribbleIdentificationApiConfig
    )
    default_skribble_monitoring_api: DefaultSkribbleMonitoringApiConfig = Field(
        default_factory=DefaultSkribbleMonitoringApiConfig
    )
    default_skribble_report_api: DefaultSkribbleReportApiConfig = Field(default_factory=DefaultSkribbleReportApiConfig)
    default_skribble_seal_api: DefaultSkribbleSealApiConfig = Field(default_factory=DefaultSkribbleSealApiConfig)
    default_skribble_send_to_api: DefaultSkribbleSendToApiConfig = Field(default_factory=DefaultSkribbleSendToApiConfig)
    default_skribble_signature_api: DefaultSkribbleSignatureApiConfig = Field(
        default_factory=DefaultSkribbleSignatureApiConfig
    )
    default_skribble_signature_attachment_api: DefaultSkribbleSignatureAttachmentApiConfig = Field(
        default_factory=DefaultSkribbleSignatureAttachmentApiConfig
    )
    default_skribble_signature_handling_api: DefaultSkribbleSignatureHandlingApiConfig = Field(
        default_factory=DefaultSkribbleSignatureHandlingApiConfig
    )
    default_skribble_signature_signer_api: DefaultSkribbleSignatureSignerApiConfig = Field(
        default_factory=DefaultSkribbleSignatureSignerApiConfig
    )
    default_skribble_user_api: DefaultSkribbleUserApiConfig = Field(default_factory=DefaultSkribbleUserApiConfig)

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_skribble_additional_information_api: NotRequired[DefaultSkribbleAdditionalInformationApiConfigDict]
    default_skribble_document_api: NotRequired[DefaultSkribbleDocumentApiConfigDict]
    default_skribble_identification_api: NotRequired[DefaultSkribbleIdentificationApiConfigDict]
    default_skribble_monitoring_api: NotRequired[DefaultSkribbleMonitoringApiConfigDict]
    default_skribble_report_api: NotRequired[DefaultSkribbleReportApiConfigDict]
    default_skribble_seal_api: NotRequired[DefaultSkribbleSealApiConfigDict]
    default_skribble_send_to_api: NotRequired[DefaultSkribbleSendToApiConfigDict]
    default_skribble_signature_api: NotRequired[DefaultSkribbleSignatureApiConfigDict]
    default_skribble_signature_attachment_api: NotRequired[DefaultSkribbleSignatureAttachmentApiConfigDict]
    default_skribble_signature_handling_api: NotRequired[DefaultSkribbleSignatureHandlingApiConfigDict]
    default_skribble_signature_signer_api: NotRequired[DefaultSkribbleSignatureSignerApiConfigDict]
    default_skribble_user_api: NotRequired[DefaultSkribbleUserApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
