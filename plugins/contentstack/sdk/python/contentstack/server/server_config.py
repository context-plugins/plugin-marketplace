from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate
from .environment import Environment


class DefaultProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://launch-api.contentstack.com"


class DefaultProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-launch-api.contentstack.com"


class DefaultEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-launch-api.contentstack.com"


class DefaultEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-na-launch-api.contentstack.com"


class DefaultEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-eu-launch-api.contentstack.com"


class DefaultEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://launch-api.contentstack.com"


class DefaultEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment7Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://launch-api.contentstack.com"


class DefaultEnvironment7ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment8Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://launch-api.contentstack.com"


class DefaultEnvironment8ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment9Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://launch-api.contentstack.com"


class DefaultEnvironment9ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultEnvironment10Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://launch-api.contentstack.com"


class DefaultEnvironment10ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultProductionConfig = Field(default_factory=DefaultProductionConfig)
    environment2: DefaultEnvironment2Config = Field(default_factory=DefaultEnvironment2Config)
    environment3: DefaultEnvironment3Config = Field(default_factory=DefaultEnvironment3Config)
    environment4: DefaultEnvironment4Config = Field(default_factory=DefaultEnvironment4Config)
    environment5: DefaultEnvironment5Config = Field(default_factory=DefaultEnvironment5Config)
    environment6: DefaultEnvironment6Config = Field(default_factory=DefaultEnvironment6Config)
    environment7: DefaultEnvironment7Config = Field(default_factory=DefaultEnvironment7Config)
    environment8: DefaultEnvironment8Config = Field(default_factory=DefaultEnvironment8Config)
    environment9: DefaultEnvironment9Config = Field(default_factory=DefaultEnvironment9Config)
    environment10: DefaultEnvironment10Config = Field(default_factory=DefaultEnvironment10Config)

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
        if environment == "environment6":
            environment6 = self.environment6
            return UrlTemplate(base_url=environment6.base_url, path=path)
        if environment == "environment7":
            environment7 = self.environment7
            return UrlTemplate(base_url=environment7.base_url, path=path)
        if environment == "environment8":
            environment8 = self.environment8
            return UrlTemplate(base_url=environment8.base_url, path=path)
        if environment == "environment9":
            environment9 = self.environment9
            return UrlTemplate(base_url=environment9.base_url, path=path)
        environment10 = self.environment10
        return UrlTemplate(base_url=environment10.base_url, path=path)


class DefaultConfigDict(TypedDict):
    production: NotRequired[DefaultProductionConfigDict]
    environment2: NotRequired[DefaultEnvironment2ConfigDict]
    environment3: NotRequired[DefaultEnvironment3ConfigDict]
    environment4: NotRequired[DefaultEnvironment4ConfigDict]
    environment5: NotRequired[DefaultEnvironment5ConfigDict]
    environment6: NotRequired[DefaultEnvironment6ConfigDict]
    environment7: NotRequired[DefaultEnvironment7ConfigDict]
    environment8: NotRequired[DefaultEnvironment8ConfigDict]
    environment9: NotRequired[DefaultEnvironment9ConfigDict]
    environment10: NotRequired[DefaultEnvironment10ConfigDict]


class DefaultContentstackAutomateManagementAccountsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackAutomateManagementAccountsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAutomateManagementAccountsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-automations-api.contentstack.com"


class DefaultContentstackAutomateManagementAccountsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAutomateManagementAccountsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-automations-api.contentstack.com"


class DefaultContentstackAutomateManagementAccountsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAutomateManagementAccountsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackAutomateManagementAccountsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAutomateManagementAccountsApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackAutomateManagementAccountsApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAutomateManagementAccountsApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackAutomateManagementAccountsApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAutomateManagementAccountsApiEnvironment7Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackAutomateManagementAccountsApiEnvironment7ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAutomateManagementAccountsApiEnvironment8Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackAutomateManagementAccountsApiEnvironment8ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAutomateManagementAccountsApiEnvironment9Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackAutomateManagementAccountsApiEnvironment9ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAutomateManagementAccountsApiEnvironment10Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackAutomateManagementAccountsApiEnvironment10ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAutomateManagementAccountsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultContentstackAutomateManagementAccountsApiProductionConfig = Field(
        default_factory=DefaultContentstackAutomateManagementAccountsApiProductionConfig
    )
    environment2: DefaultContentstackAutomateManagementAccountsApiEnvironment2Config = Field(
        default_factory=DefaultContentstackAutomateManagementAccountsApiEnvironment2Config
    )
    environment3: DefaultContentstackAutomateManagementAccountsApiEnvironment3Config = Field(
        default_factory=DefaultContentstackAutomateManagementAccountsApiEnvironment3Config
    )
    environment4: DefaultContentstackAutomateManagementAccountsApiEnvironment4Config = Field(
        default_factory=DefaultContentstackAutomateManagementAccountsApiEnvironment4Config
    )
    environment5: DefaultContentstackAutomateManagementAccountsApiEnvironment5Config = Field(
        default_factory=DefaultContentstackAutomateManagementAccountsApiEnvironment5Config
    )
    environment6: DefaultContentstackAutomateManagementAccountsApiEnvironment6Config = Field(
        default_factory=DefaultContentstackAutomateManagementAccountsApiEnvironment6Config
    )
    environment7: DefaultContentstackAutomateManagementAccountsApiEnvironment7Config = Field(
        default_factory=DefaultContentstackAutomateManagementAccountsApiEnvironment7Config
    )
    environment8: DefaultContentstackAutomateManagementAccountsApiEnvironment8Config = Field(
        default_factory=DefaultContentstackAutomateManagementAccountsApiEnvironment8Config
    )
    environment9: DefaultContentstackAutomateManagementAccountsApiEnvironment9Config = Field(
        default_factory=DefaultContentstackAutomateManagementAccountsApiEnvironment9Config
    )
    environment10: DefaultContentstackAutomateManagementAccountsApiEnvironment10Config = Field(
        default_factory=DefaultContentstackAutomateManagementAccountsApiEnvironment10Config
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
        if environment == "environment6":
            environment6 = self.environment6
            return UrlTemplate(base_url=environment6.base_url, path=path)
        if environment == "environment7":
            environment7 = self.environment7
            return UrlTemplate(base_url=environment7.base_url, path=path)
        if environment == "environment8":
            environment8 = self.environment8
            return UrlTemplate(base_url=environment8.base_url, path=path)
        if environment == "environment9":
            environment9 = self.environment9
            return UrlTemplate(base_url=environment9.base_url, path=path)
        environment10 = self.environment10
        return UrlTemplate(base_url=environment10.base_url, path=path)


class DefaultContentstackAutomateManagementAccountsApiConfigDict(TypedDict):
    production: NotRequired[DefaultContentstackAutomateManagementAccountsApiProductionConfigDict]
    environment2: NotRequired[DefaultContentstackAutomateManagementAccountsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultContentstackAutomateManagementAccountsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultContentstackAutomateManagementAccountsApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultContentstackAutomateManagementAccountsApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultContentstackAutomateManagementAccountsApiEnvironment6ConfigDict]
    environment7: NotRequired[DefaultContentstackAutomateManagementAccountsApiEnvironment7ConfigDict]
    environment8: NotRequired[DefaultContentstackAutomateManagementAccountsApiEnvironment8ConfigDict]
    environment9: NotRequired[DefaultContentstackAutomateManagementAccountsApiEnvironment9ConfigDict]
    environment10: NotRequired[DefaultContentstackAutomateManagementAccountsApiEnvironment10ConfigDict]


class DefaultContentstackAssetsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cdn.contentstack.io/v3"


class DefaultContentstackAssetsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAssetsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-cdn.contentstack.com/v3"


class DefaultContentstackAssetsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAssetsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-cdn.contentstack.com/v3"


class DefaultContentstackAssetsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAssetsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.contentstack.io/v3"


class DefaultContentstackAssetsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAssetsApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-api.contentstack.com/v3"


class DefaultContentstackAssetsApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAssetsApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-api.contentstack.com/v3"


class DefaultContentstackAssetsApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAssetsApiEnvironment7Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-na-api.contentstack.com/v3"


class DefaultContentstackAssetsApiEnvironment7ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAssetsApiEnvironment8Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-eu-api.contentstack.com/v3"


class DefaultContentstackAssetsApiEnvironment8ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAssetsApiEnvironment9Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cdn.contentstack.io/v3"


class DefaultContentstackAssetsApiEnvironment9ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAssetsApiEnvironment10Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://cdn.contentstack.io/v3"


class DefaultContentstackAssetsApiEnvironment10ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackAssetsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultContentstackAssetsApiProductionConfig = Field(
        default_factory=DefaultContentstackAssetsApiProductionConfig
    )
    environment2: DefaultContentstackAssetsApiEnvironment2Config = Field(
        default_factory=DefaultContentstackAssetsApiEnvironment2Config
    )
    environment3: DefaultContentstackAssetsApiEnvironment3Config = Field(
        default_factory=DefaultContentstackAssetsApiEnvironment3Config
    )
    environment4: DefaultContentstackAssetsApiEnvironment4Config = Field(
        default_factory=DefaultContentstackAssetsApiEnvironment4Config
    )
    environment5: DefaultContentstackAssetsApiEnvironment5Config = Field(
        default_factory=DefaultContentstackAssetsApiEnvironment5Config
    )
    environment6: DefaultContentstackAssetsApiEnvironment6Config = Field(
        default_factory=DefaultContentstackAssetsApiEnvironment6Config
    )
    environment7: DefaultContentstackAssetsApiEnvironment7Config = Field(
        default_factory=DefaultContentstackAssetsApiEnvironment7Config
    )
    environment8: DefaultContentstackAssetsApiEnvironment8Config = Field(
        default_factory=DefaultContentstackAssetsApiEnvironment8Config
    )
    environment9: DefaultContentstackAssetsApiEnvironment9Config = Field(
        default_factory=DefaultContentstackAssetsApiEnvironment9Config
    )
    environment10: DefaultContentstackAssetsApiEnvironment10Config = Field(
        default_factory=DefaultContentstackAssetsApiEnvironment10Config
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
        if environment == "environment6":
            environment6 = self.environment6
            return UrlTemplate(base_url=environment6.base_url, path=path)
        if environment == "environment7":
            environment7 = self.environment7
            return UrlTemplate(base_url=environment7.base_url, path=path)
        if environment == "environment8":
            environment8 = self.environment8
            return UrlTemplate(base_url=environment8.base_url, path=path)
        if environment == "environment9":
            environment9 = self.environment9
            return UrlTemplate(base_url=environment9.base_url, path=path)
        environment10 = self.environment10
        return UrlTemplate(base_url=environment10.base_url, path=path)


class DefaultContentstackAssetsApiConfigDict(TypedDict):
    production: NotRequired[DefaultContentstackAssetsApiProductionConfigDict]
    environment2: NotRequired[DefaultContentstackAssetsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultContentstackAssetsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultContentstackAssetsApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultContentstackAssetsApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultContentstackAssetsApiEnvironment6ConfigDict]
    environment7: NotRequired[DefaultContentstackAssetsApiEnvironment7ConfigDict]
    environment8: NotRequired[DefaultContentstackAssetsApiEnvironment8ConfigDict]
    environment9: NotRequired[DefaultContentstackAssetsApiEnvironment9ConfigDict]
    environment10: NotRequired[DefaultContentstackAssetsApiEnvironment10ConfigDict]


class DefaultContentstackPersonalizeManagementAttributesApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://personalize-api.contentstack.com"


class DefaultContentstackPersonalizeManagementAttributesApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-personalize-api.contentstack.com"


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-personalize-api.contentstack.com"


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-na-personalize-api.contentstack.com"


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-eu-personalize-api.contentstack.com"


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://personalize-api.contentstack.com"


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment7Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://personalize-api.contentstack.com"


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment7ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment8Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://personalize-api.contentstack.com"


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment8ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment9Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://personalize-api.contentstack.com"


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment9ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment10Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://personalize-api.contentstack.com"


class DefaultContentstackPersonalizeManagementAttributesApiEnvironment10ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackPersonalizeManagementAttributesApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultContentstackPersonalizeManagementAttributesApiProductionConfig = Field(
        default_factory=DefaultContentstackPersonalizeManagementAttributesApiProductionConfig
    )
    environment2: DefaultContentstackPersonalizeManagementAttributesApiEnvironment2Config = Field(
        default_factory=DefaultContentstackPersonalizeManagementAttributesApiEnvironment2Config
    )
    environment3: DefaultContentstackPersonalizeManagementAttributesApiEnvironment3Config = Field(
        default_factory=DefaultContentstackPersonalizeManagementAttributesApiEnvironment3Config
    )
    environment4: DefaultContentstackPersonalizeManagementAttributesApiEnvironment4Config = Field(
        default_factory=DefaultContentstackPersonalizeManagementAttributesApiEnvironment4Config
    )
    environment5: DefaultContentstackPersonalizeManagementAttributesApiEnvironment5Config = Field(
        default_factory=DefaultContentstackPersonalizeManagementAttributesApiEnvironment5Config
    )
    environment6: DefaultContentstackPersonalizeManagementAttributesApiEnvironment6Config = Field(
        default_factory=DefaultContentstackPersonalizeManagementAttributesApiEnvironment6Config
    )
    environment7: DefaultContentstackPersonalizeManagementAttributesApiEnvironment7Config = Field(
        default_factory=DefaultContentstackPersonalizeManagementAttributesApiEnvironment7Config
    )
    environment8: DefaultContentstackPersonalizeManagementAttributesApiEnvironment8Config = Field(
        default_factory=DefaultContentstackPersonalizeManagementAttributesApiEnvironment8Config
    )
    environment9: DefaultContentstackPersonalizeManagementAttributesApiEnvironment9Config = Field(
        default_factory=DefaultContentstackPersonalizeManagementAttributesApiEnvironment9Config
    )
    environment10: DefaultContentstackPersonalizeManagementAttributesApiEnvironment10Config = Field(
        default_factory=DefaultContentstackPersonalizeManagementAttributesApiEnvironment10Config
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
        if environment == "environment6":
            environment6 = self.environment6
            return UrlTemplate(base_url=environment6.base_url, path=path)
        if environment == "environment7":
            environment7 = self.environment7
            return UrlTemplate(base_url=environment7.base_url, path=path)
        if environment == "environment8":
            environment8 = self.environment8
            return UrlTemplate(base_url=environment8.base_url, path=path)
        if environment == "environment9":
            environment9 = self.environment9
            return UrlTemplate(base_url=environment9.base_url, path=path)
        environment10 = self.environment10
        return UrlTemplate(base_url=environment10.base_url, path=path)


class DefaultContentstackPersonalizeManagementAttributesApiConfigDict(TypedDict):
    production: NotRequired[DefaultContentstackPersonalizeManagementAttributesApiProductionConfigDict]
    environment2: NotRequired[DefaultContentstackPersonalizeManagementAttributesApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultContentstackPersonalizeManagementAttributesApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultContentstackPersonalizeManagementAttributesApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultContentstackPersonalizeManagementAttributesApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultContentstackPersonalizeManagementAttributesApiEnvironment6ConfigDict]
    environment7: NotRequired[DefaultContentstackPersonalizeManagementAttributesApiEnvironment7ConfigDict]
    environment8: NotRequired[DefaultContentstackPersonalizeManagementAttributesApiEnvironment8ConfigDict]
    environment9: NotRequired[DefaultContentstackPersonalizeManagementAttributesApiEnvironment9ConfigDict]
    environment10: NotRequired[DefaultContentstackPersonalizeManagementAttributesApiEnvironment10ConfigDict]


class DefaultContentstackBrandKitManagementBrandKitsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://brand-kits-api.contentstack.com"


class DefaultContentstackBrandKitManagementBrandKitsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-brand-kits-api.contentstack.com"


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-na-brand-kits-api.contentstack.com"


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-na-brand-kits-api.contentstack.com"


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-eu-brand-kits-api.contentstack.com"


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://gcp-na-brand-kits-api.contentstack.com"


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment7Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://gcp-eu-brand-kits-api.contentstack.com"


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment7ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment8Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://brand-kits-api.contentstack.com"


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment8ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment9Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://brand-kits-api.contentstack.com"


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment9ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment10Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://brand-kits-api.contentstack.com"


class DefaultContentstackBrandKitManagementBrandKitsApiEnvironment10ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackBrandKitManagementBrandKitsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultContentstackBrandKitManagementBrandKitsApiProductionConfig = Field(
        default_factory=DefaultContentstackBrandKitManagementBrandKitsApiProductionConfig
    )
    environment2: DefaultContentstackBrandKitManagementBrandKitsApiEnvironment2Config = Field(
        default_factory=DefaultContentstackBrandKitManagementBrandKitsApiEnvironment2Config
    )
    environment3: DefaultContentstackBrandKitManagementBrandKitsApiEnvironment3Config = Field(
        default_factory=DefaultContentstackBrandKitManagementBrandKitsApiEnvironment3Config
    )
    environment4: DefaultContentstackBrandKitManagementBrandKitsApiEnvironment4Config = Field(
        default_factory=DefaultContentstackBrandKitManagementBrandKitsApiEnvironment4Config
    )
    environment5: DefaultContentstackBrandKitManagementBrandKitsApiEnvironment5Config = Field(
        default_factory=DefaultContentstackBrandKitManagementBrandKitsApiEnvironment5Config
    )
    environment6: DefaultContentstackBrandKitManagementBrandKitsApiEnvironment6Config = Field(
        default_factory=DefaultContentstackBrandKitManagementBrandKitsApiEnvironment6Config
    )
    environment7: DefaultContentstackBrandKitManagementBrandKitsApiEnvironment7Config = Field(
        default_factory=DefaultContentstackBrandKitManagementBrandKitsApiEnvironment7Config
    )
    environment8: DefaultContentstackBrandKitManagementBrandKitsApiEnvironment8Config = Field(
        default_factory=DefaultContentstackBrandKitManagementBrandKitsApiEnvironment8Config
    )
    environment9: DefaultContentstackBrandKitManagementBrandKitsApiEnvironment9Config = Field(
        default_factory=DefaultContentstackBrandKitManagementBrandKitsApiEnvironment9Config
    )
    environment10: DefaultContentstackBrandKitManagementBrandKitsApiEnvironment10Config = Field(
        default_factory=DefaultContentstackBrandKitManagementBrandKitsApiEnvironment10Config
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
        if environment == "environment6":
            environment6 = self.environment6
            return UrlTemplate(base_url=environment6.base_url, path=path)
        if environment == "environment7":
            environment7 = self.environment7
            return UrlTemplate(base_url=environment7.base_url, path=path)
        if environment == "environment8":
            environment8 = self.environment8
            return UrlTemplate(base_url=environment8.base_url, path=path)
        if environment == "environment9":
            environment9 = self.environment9
            return UrlTemplate(base_url=environment9.base_url, path=path)
        environment10 = self.environment10
        return UrlTemplate(base_url=environment10.base_url, path=path)


class DefaultContentstackBrandKitManagementBrandKitsApiConfigDict(TypedDict):
    production: NotRequired[DefaultContentstackBrandKitManagementBrandKitsApiProductionConfigDict]
    environment2: NotRequired[DefaultContentstackBrandKitManagementBrandKitsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultContentstackBrandKitManagementBrandKitsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultContentstackBrandKitManagementBrandKitsApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultContentstackBrandKitManagementBrandKitsApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultContentstackBrandKitManagementBrandKitsApiEnvironment6ConfigDict]
    environment7: NotRequired[DefaultContentstackBrandKitManagementBrandKitsApiEnvironment7ConfigDict]
    environment8: NotRequired[DefaultContentstackBrandKitManagementBrandKitsApiEnvironment8ConfigDict]
    environment9: NotRequired[DefaultContentstackBrandKitManagementBrandKitsApiEnvironment9ConfigDict]
    environment10: NotRequired[DefaultContentstackBrandKitManagementBrandKitsApiEnvironment10ConfigDict]


class DefaultContentstackEnvironmentsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.contentstack.io/v3"


class DefaultContentstackEnvironmentsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEnvironmentsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-api.contentstack.com/v3"


class DefaultContentstackEnvironmentsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEnvironmentsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-api.contentstack.com/v3"


class DefaultContentstackEnvironmentsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEnvironmentsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-na-api.contentstack.com/v3"


class DefaultContentstackEnvironmentsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEnvironmentsApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-eu-api.contentstack.com/v3"


class DefaultContentstackEnvironmentsApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEnvironmentsApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://launch-api.contentstack.com"


class DefaultContentstackEnvironmentsApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEnvironmentsApiEnvironment7Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-launch-api.contentstack.com"


class DefaultContentstackEnvironmentsApiEnvironment7ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEnvironmentsApiEnvironment8Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-launch-api.contentstack.com"


class DefaultContentstackEnvironmentsApiEnvironment8ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEnvironmentsApiEnvironment9Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-na-launch-api.contentstack.com"


class DefaultContentstackEnvironmentsApiEnvironment9ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEnvironmentsApiEnvironment10Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-eu-launch-api.contentstack.com"


class DefaultContentstackEnvironmentsApiEnvironment10ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEnvironmentsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultContentstackEnvironmentsApiProductionConfig = Field(
        default_factory=DefaultContentstackEnvironmentsApiProductionConfig
    )
    environment2: DefaultContentstackEnvironmentsApiEnvironment2Config = Field(
        default_factory=DefaultContentstackEnvironmentsApiEnvironment2Config
    )
    environment3: DefaultContentstackEnvironmentsApiEnvironment3Config = Field(
        default_factory=DefaultContentstackEnvironmentsApiEnvironment3Config
    )
    environment4: DefaultContentstackEnvironmentsApiEnvironment4Config = Field(
        default_factory=DefaultContentstackEnvironmentsApiEnvironment4Config
    )
    environment5: DefaultContentstackEnvironmentsApiEnvironment5Config = Field(
        default_factory=DefaultContentstackEnvironmentsApiEnvironment5Config
    )
    environment6: DefaultContentstackEnvironmentsApiEnvironment6Config = Field(
        default_factory=DefaultContentstackEnvironmentsApiEnvironment6Config
    )
    environment7: DefaultContentstackEnvironmentsApiEnvironment7Config = Field(
        default_factory=DefaultContentstackEnvironmentsApiEnvironment7Config
    )
    environment8: DefaultContentstackEnvironmentsApiEnvironment8Config = Field(
        default_factory=DefaultContentstackEnvironmentsApiEnvironment8Config
    )
    environment9: DefaultContentstackEnvironmentsApiEnvironment9Config = Field(
        default_factory=DefaultContentstackEnvironmentsApiEnvironment9Config
    )
    environment10: DefaultContentstackEnvironmentsApiEnvironment10Config = Field(
        default_factory=DefaultContentstackEnvironmentsApiEnvironment10Config
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
        if environment == "environment6":
            environment6 = self.environment6
            return UrlTemplate(base_url=environment6.base_url, path=path)
        if environment == "environment7":
            environment7 = self.environment7
            return UrlTemplate(base_url=environment7.base_url, path=path)
        if environment == "environment8":
            environment8 = self.environment8
            return UrlTemplate(base_url=environment8.base_url, path=path)
        if environment == "environment9":
            environment9 = self.environment9
            return UrlTemplate(base_url=environment9.base_url, path=path)
        environment10 = self.environment10
        return UrlTemplate(base_url=environment10.base_url, path=path)


class DefaultContentstackEnvironmentsApiConfigDict(TypedDict):
    production: NotRequired[DefaultContentstackEnvironmentsApiProductionConfigDict]
    environment2: NotRequired[DefaultContentstackEnvironmentsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultContentstackEnvironmentsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultContentstackEnvironmentsApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultContentstackEnvironmentsApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultContentstackEnvironmentsApiEnvironment6ConfigDict]
    environment7: NotRequired[DefaultContentstackEnvironmentsApiEnvironment7ConfigDict]
    environment8: NotRequired[DefaultContentstackEnvironmentsApiEnvironment8ConfigDict]
    environment9: NotRequired[DefaultContentstackEnvironmentsApiEnvironment9ConfigDict]
    environment10: NotRequired[DefaultContentstackEnvironmentsApiEnvironment10ConfigDict]


class DefaultContentstackEventsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://personalize-edge.contentstack.com"


class DefaultContentstackEventsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEventsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-personalize-edge.contentstack.com"


class DefaultContentstackEventsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEventsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-personalize-edge.contentstack.com"


class DefaultContentstackEventsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEventsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-na-personalize-edge.contentstack.com"


class DefaultContentstackEventsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEventsApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-eu-personalize-edge.contentstack.com"


class DefaultContentstackEventsApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEventsApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://personalize-api.contentstack.com"


class DefaultContentstackEventsApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEventsApiEnvironment7Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-personalize-api.contentstack.com"


class DefaultContentstackEventsApiEnvironment7ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEventsApiEnvironment8Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-personalize-api.contentstack.com"


class DefaultContentstackEventsApiEnvironment8ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEventsApiEnvironment9Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-na-personalize-api.contentstack.com"


class DefaultContentstackEventsApiEnvironment9ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEventsApiEnvironment10Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-eu-personalize-api.contentstack.com"


class DefaultContentstackEventsApiEnvironment10ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackEventsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultContentstackEventsApiProductionConfig = Field(
        default_factory=DefaultContentstackEventsApiProductionConfig
    )
    environment2: DefaultContentstackEventsApiEnvironment2Config = Field(
        default_factory=DefaultContentstackEventsApiEnvironment2Config
    )
    environment3: DefaultContentstackEventsApiEnvironment3Config = Field(
        default_factory=DefaultContentstackEventsApiEnvironment3Config
    )
    environment4: DefaultContentstackEventsApiEnvironment4Config = Field(
        default_factory=DefaultContentstackEventsApiEnvironment4Config
    )
    environment5: DefaultContentstackEventsApiEnvironment5Config = Field(
        default_factory=DefaultContentstackEventsApiEnvironment5Config
    )
    environment6: DefaultContentstackEventsApiEnvironment6Config = Field(
        default_factory=DefaultContentstackEventsApiEnvironment6Config
    )
    environment7: DefaultContentstackEventsApiEnvironment7Config = Field(
        default_factory=DefaultContentstackEventsApiEnvironment7Config
    )
    environment8: DefaultContentstackEventsApiEnvironment8Config = Field(
        default_factory=DefaultContentstackEventsApiEnvironment8Config
    )
    environment9: DefaultContentstackEventsApiEnvironment9Config = Field(
        default_factory=DefaultContentstackEventsApiEnvironment9Config
    )
    environment10: DefaultContentstackEventsApiEnvironment10Config = Field(
        default_factory=DefaultContentstackEventsApiEnvironment10Config
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
        if environment == "environment6":
            environment6 = self.environment6
            return UrlTemplate(base_url=environment6.base_url, path=path)
        if environment == "environment7":
            environment7 = self.environment7
            return UrlTemplate(base_url=environment7.base_url, path=path)
        if environment == "environment8":
            environment8 = self.environment8
            return UrlTemplate(base_url=environment8.base_url, path=path)
        if environment == "environment9":
            environment9 = self.environment9
            return UrlTemplate(base_url=environment9.base_url, path=path)
        environment10 = self.environment10
        return UrlTemplate(base_url=environment10.base_url, path=path)


class DefaultContentstackEventsApiConfigDict(TypedDict):
    production: NotRequired[DefaultContentstackEventsApiProductionConfigDict]
    environment2: NotRequired[DefaultContentstackEventsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultContentstackEventsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultContentstackEventsApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultContentstackEventsApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultContentstackEventsApiEnvironment6ConfigDict]
    environment7: NotRequired[DefaultContentstackEventsApiEnvironment7ConfigDict]
    environment8: NotRequired[DefaultContentstackEventsApiEnvironment8ConfigDict]
    environment9: NotRequired[DefaultContentstackEventsApiEnvironment9ConfigDict]
    environment10: NotRequired[DefaultContentstackEventsApiEnvironment10ConfigDict]


class DefaultContentstackProjectsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackProjectsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackProjectsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-automations-api.contentstack.com"


class DefaultContentstackProjectsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackProjectsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-automations-api.contentstack.com"


class DefaultContentstackProjectsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackProjectsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://launch-api.contentstack.com"


class DefaultContentstackProjectsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackProjectsApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-launch-api.contentstack.com"


class DefaultContentstackProjectsApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackProjectsApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-launch-api.contentstack.com"


class DefaultContentstackProjectsApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackProjectsApiEnvironment7Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-na-launch-api.contentstack.com"


class DefaultContentstackProjectsApiEnvironment7ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackProjectsApiEnvironment8Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-eu-launch-api.contentstack.com"


class DefaultContentstackProjectsApiEnvironment8ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackProjectsApiEnvironment9Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackProjectsApiEnvironment9ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackProjectsApiEnvironment10Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://automations-api.contentstack.com"


class DefaultContentstackProjectsApiEnvironment10ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackProjectsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultContentstackProjectsApiProductionConfig = Field(
        default_factory=DefaultContentstackProjectsApiProductionConfig
    )
    environment2: DefaultContentstackProjectsApiEnvironment2Config = Field(
        default_factory=DefaultContentstackProjectsApiEnvironment2Config
    )
    environment3: DefaultContentstackProjectsApiEnvironment3Config = Field(
        default_factory=DefaultContentstackProjectsApiEnvironment3Config
    )
    environment4: DefaultContentstackProjectsApiEnvironment4Config = Field(
        default_factory=DefaultContentstackProjectsApiEnvironment4Config
    )
    environment5: DefaultContentstackProjectsApiEnvironment5Config = Field(
        default_factory=DefaultContentstackProjectsApiEnvironment5Config
    )
    environment6: DefaultContentstackProjectsApiEnvironment6Config = Field(
        default_factory=DefaultContentstackProjectsApiEnvironment6Config
    )
    environment7: DefaultContentstackProjectsApiEnvironment7Config = Field(
        default_factory=DefaultContentstackProjectsApiEnvironment7Config
    )
    environment8: DefaultContentstackProjectsApiEnvironment8Config = Field(
        default_factory=DefaultContentstackProjectsApiEnvironment8Config
    )
    environment9: DefaultContentstackProjectsApiEnvironment9Config = Field(
        default_factory=DefaultContentstackProjectsApiEnvironment9Config
    )
    environment10: DefaultContentstackProjectsApiEnvironment10Config = Field(
        default_factory=DefaultContentstackProjectsApiEnvironment10Config
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
        if environment == "environment6":
            environment6 = self.environment6
            return UrlTemplate(base_url=environment6.base_url, path=path)
        if environment == "environment7":
            environment7 = self.environment7
            return UrlTemplate(base_url=environment7.base_url, path=path)
        if environment == "environment8":
            environment8 = self.environment8
            return UrlTemplate(base_url=environment8.base_url, path=path)
        if environment == "environment9":
            environment9 = self.environment9
            return UrlTemplate(base_url=environment9.base_url, path=path)
        environment10 = self.environment10
        return UrlTemplate(base_url=environment10.base_url, path=path)


class DefaultContentstackProjectsApiConfigDict(TypedDict):
    production: NotRequired[DefaultContentstackProjectsApiProductionConfigDict]
    environment2: NotRequired[DefaultContentstackProjectsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultContentstackProjectsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultContentstackProjectsApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultContentstackProjectsApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultContentstackProjectsApiEnvironment6ConfigDict]
    environment7: NotRequired[DefaultContentstackProjectsApiEnvironment7ConfigDict]
    environment8: NotRequired[DefaultContentstackProjectsApiEnvironment8ConfigDict]
    environment9: NotRequired[DefaultContentstackProjectsApiEnvironment9ConfigDict]
    environment10: NotRequired[DefaultContentstackProjectsApiEnvironment10ConfigDict]


class DefaultContentstackScimScimGroupsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://auth-api.contentstack.com"


class DefaultContentstackScimScimGroupsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackScimScimGroupsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://eu-auth-api.contentstack.com"


class DefaultContentstackScimScimGroupsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackScimScimGroupsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://au-auth-api.contentstack.com"


class DefaultContentstackScimScimGroupsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackScimScimGroupsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-na-auth-api.contentstack.com"


class DefaultContentstackScimScimGroupsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackScimScimGroupsApiEnvironment5Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://azure-eu-auth-api.contentstack.com"


class DefaultContentstackScimScimGroupsApiEnvironment5ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackScimScimGroupsApiEnvironment6Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://gcp-na-auth-api.contentstack.com"


class DefaultContentstackScimScimGroupsApiEnvironment6ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackScimScimGroupsApiEnvironment7Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://gcp-eu-auth-api.contentstack.com"


class DefaultContentstackScimScimGroupsApiEnvironment7ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackScimScimGroupsApiEnvironment8Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://auth-api.contentstack.com"


class DefaultContentstackScimScimGroupsApiEnvironment8ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackScimScimGroupsApiEnvironment9Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://auth-api.contentstack.com"


class DefaultContentstackScimScimGroupsApiEnvironment9ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackScimScimGroupsApiEnvironment10Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://auth-api.contentstack.com"


class DefaultContentstackScimScimGroupsApiEnvironment10ConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultContentstackScimScimGroupsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultContentstackScimScimGroupsApiProductionConfig = Field(
        default_factory=DefaultContentstackScimScimGroupsApiProductionConfig
    )
    environment2: DefaultContentstackScimScimGroupsApiEnvironment2Config = Field(
        default_factory=DefaultContentstackScimScimGroupsApiEnvironment2Config
    )
    environment3: DefaultContentstackScimScimGroupsApiEnvironment3Config = Field(
        default_factory=DefaultContentstackScimScimGroupsApiEnvironment3Config
    )
    environment4: DefaultContentstackScimScimGroupsApiEnvironment4Config = Field(
        default_factory=DefaultContentstackScimScimGroupsApiEnvironment4Config
    )
    environment5: DefaultContentstackScimScimGroupsApiEnvironment5Config = Field(
        default_factory=DefaultContentstackScimScimGroupsApiEnvironment5Config
    )
    environment6: DefaultContentstackScimScimGroupsApiEnvironment6Config = Field(
        default_factory=DefaultContentstackScimScimGroupsApiEnvironment6Config
    )
    environment7: DefaultContentstackScimScimGroupsApiEnvironment7Config = Field(
        default_factory=DefaultContentstackScimScimGroupsApiEnvironment7Config
    )
    environment8: DefaultContentstackScimScimGroupsApiEnvironment8Config = Field(
        default_factory=DefaultContentstackScimScimGroupsApiEnvironment8Config
    )
    environment9: DefaultContentstackScimScimGroupsApiEnvironment9Config = Field(
        default_factory=DefaultContentstackScimScimGroupsApiEnvironment9Config
    )
    environment10: DefaultContentstackScimScimGroupsApiEnvironment10Config = Field(
        default_factory=DefaultContentstackScimScimGroupsApiEnvironment10Config
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
        if environment == "environment6":
            environment6 = self.environment6
            return UrlTemplate(base_url=environment6.base_url, path=path)
        if environment == "environment7":
            environment7 = self.environment7
            return UrlTemplate(base_url=environment7.base_url, path=path)
        if environment == "environment8":
            environment8 = self.environment8
            return UrlTemplate(base_url=environment8.base_url, path=path)
        if environment == "environment9":
            environment9 = self.environment9
            return UrlTemplate(base_url=environment9.base_url, path=path)
        environment10 = self.environment10
        return UrlTemplate(base_url=environment10.base_url, path=path)


class DefaultContentstackScimScimGroupsApiConfigDict(TypedDict):
    production: NotRequired[DefaultContentstackScimScimGroupsApiProductionConfigDict]
    environment2: NotRequired[DefaultContentstackScimScimGroupsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultContentstackScimScimGroupsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultContentstackScimScimGroupsApiEnvironment4ConfigDict]
    environment5: NotRequired[DefaultContentstackScimScimGroupsApiEnvironment5ConfigDict]
    environment6: NotRequired[DefaultContentstackScimScimGroupsApiEnvironment6ConfigDict]
    environment7: NotRequired[DefaultContentstackScimScimGroupsApiEnvironment7ConfigDict]
    environment8: NotRequired[DefaultContentstackScimScimGroupsApiEnvironment8ConfigDict]
    environment9: NotRequired[DefaultContentstackScimScimGroupsApiEnvironment9ConfigDict]
    environment10: NotRequired[DefaultContentstackScimScimGroupsApiEnvironment10ConfigDict]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_contentstack_automate_management_accounts_api: (
        DefaultContentstackAutomateManagementAccountsApiConfig
    ) = Field(default_factory=DefaultContentstackAutomateManagementAccountsApiConfig)
    default_contentstack_assets_api: DefaultContentstackAssetsApiConfig = Field(
        default_factory=DefaultContentstackAssetsApiConfig
    )
    default_contentstack_personalize_management_attributes_api: (
        DefaultContentstackPersonalizeManagementAttributesApiConfig
    ) = Field(default_factory=DefaultContentstackPersonalizeManagementAttributesApiConfig)
    default_contentstack_brand_kit_management_brand_kits_api: (
        DefaultContentstackBrandKitManagementBrandKitsApiConfig
    ) = Field(default_factory=DefaultContentstackBrandKitManagementBrandKitsApiConfig)
    default_contentstack_environments_api: DefaultContentstackEnvironmentsApiConfig = Field(
        default_factory=DefaultContentstackEnvironmentsApiConfig
    )
    default_contentstack_events_api: DefaultContentstackEventsApiConfig = Field(
        default_factory=DefaultContentstackEventsApiConfig
    )
    default_contentstack_projects_api: DefaultContentstackProjectsApiConfig = Field(
        default_factory=DefaultContentstackProjectsApiConfig
    )
    default_contentstack_scim_scim_groups_api: DefaultContentstackScimScimGroupsApiConfig = Field(
        default_factory=DefaultContentstackScimScimGroupsApiConfig
    )

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_contentstack_automate_management_accounts_api: NotRequired[
        DefaultContentstackAutomateManagementAccountsApiConfigDict
    ]
    default_contentstack_assets_api: NotRequired[DefaultContentstackAssetsApiConfigDict]
    default_contentstack_personalize_management_attributes_api: NotRequired[
        DefaultContentstackPersonalizeManagementAttributesApiConfigDict
    ]
    default_contentstack_brand_kit_management_brand_kits_api: NotRequired[
        DefaultContentstackBrandKitManagementBrandKitsApiConfigDict
    ]
    default_contentstack_environments_api: NotRequired[DefaultContentstackEnvironmentsApiConfigDict]
    default_contentstack_events_api: NotRequired[DefaultContentstackEventsApiConfigDict]
    default_contentstack_projects_api: NotRequired[DefaultContentstackProjectsApiConfigDict]
    default_contentstack_scim_scim_groups_api: NotRequired[DefaultContentstackScimScimGroupsApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
