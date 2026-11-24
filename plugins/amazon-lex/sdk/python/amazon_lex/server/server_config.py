from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate, param
from .environment import Environment


class DefaultProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultProductionConfig = Field(default_factory=DefaultProductionConfig)
    environment2: DefaultEnvironment2Config = Field(default_factory=DefaultEnvironment2Config)
    environment3: DefaultEnvironment3Config = Field(default_factory=DefaultEnvironment3Config)
    environment4: DefaultEnvironment4Config = Field(default_factory=DefaultEnvironment4Config)

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url, path=path, variables=[param[str]("region", production.region)]
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url, path=path, variables=[param[str]("region", environment2.region)]
            )
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(
                base_url=environment3.base_url, path=path, variables=[param[str]("region", environment3.region)]
            )
        environment4 = self.environment4
        return UrlTemplate(
            base_url=environment4.base_url, path=path, variables=[param[str]("region", environment4.region)]
        )


class DefaultConfigDict(TypedDict):
    production: NotRequired[DefaultProductionConfigDict]
    environment2: NotRequired[DefaultEnvironment2ConfigDict]
    environment3: NotRequired[DefaultEnvironment3ConfigDict]
    environment4: NotRequired[DefaultEnvironment4ConfigDict]


class DefaultAmazonLexModelBuildingV2BotsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models-v2-lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2BotsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2BotsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2BotsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2BotsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://runtime-v2-lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2BotsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2BotsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://runtime.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2BotsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2BotsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultAmazonLexModelBuildingV2BotsApiProductionConfig = Field(
        default_factory=DefaultAmazonLexModelBuildingV2BotsApiProductionConfig
    )
    environment2: DefaultAmazonLexModelBuildingV2BotsApiEnvironment2Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2BotsApiEnvironment2Config
    )
    environment3: DefaultAmazonLexModelBuildingV2BotsApiEnvironment3Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2BotsApiEnvironment3Config
    )
    environment4: DefaultAmazonLexModelBuildingV2BotsApiEnvironment4Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2BotsApiEnvironment4Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url, path=path, variables=[param[str]("region", production.region)]
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url, path=path, variables=[param[str]("region", environment2.region)]
            )
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(
                base_url=environment3.base_url, path=path, variables=[param[str]("region", environment3.region)]
            )
        environment4 = self.environment4
        return UrlTemplate(
            base_url=environment4.base_url, path=path, variables=[param[str]("region", environment4.region)]
        )


class DefaultAmazonLexModelBuildingV2BotsApiConfigDict(TypedDict):
    production: NotRequired[DefaultAmazonLexModelBuildingV2BotsApiProductionConfigDict]
    environment2: NotRequired[DefaultAmazonLexModelBuildingV2BotsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultAmazonLexModelBuildingV2BotsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultAmazonLexModelBuildingV2BotsApiEnvironment4ConfigDict]


class DefaultAmazonLexModelBuildingV2BuiltinsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2BuiltinsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models-v2-lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2BuiltinsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultAmazonLexModelBuildingV2BuiltinsApiProductionConfig = Field(
        default_factory=DefaultAmazonLexModelBuildingV2BuiltinsApiProductionConfig
    )
    environment2: DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment2Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment2Config
    )
    environment3: DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment3Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment3Config
    )
    environment4: DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment4Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment4Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url, path=path, variables=[param[str]("region", production.region)]
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url, path=path, variables=[param[str]("region", environment2.region)]
            )
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(
                base_url=environment3.base_url, path=path, variables=[param[str]("region", environment3.region)]
            )
        environment4 = self.environment4
        return UrlTemplate(
            base_url=environment4.base_url, path=path, variables=[param[str]("region", environment4.region)]
        )


class DefaultAmazonLexModelBuildingV2BuiltinsApiConfigDict(TypedDict):
    production: NotRequired[DefaultAmazonLexModelBuildingV2BuiltinsApiProductionConfigDict]
    environment2: NotRequired[DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultAmazonLexModelBuildingV2BuiltinsApiEnvironment4ConfigDict]


class DefaultAmazonLexModelBuildingV2ExportsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models-v2-lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2ExportsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2ExportsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2ExportsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2ExportsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models-v2-lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2ExportsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2ExportsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models-v2-lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2ExportsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2ExportsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultAmazonLexModelBuildingV2ExportsApiProductionConfig = Field(
        default_factory=DefaultAmazonLexModelBuildingV2ExportsApiProductionConfig
    )
    environment2: DefaultAmazonLexModelBuildingV2ExportsApiEnvironment2Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2ExportsApiEnvironment2Config
    )
    environment3: DefaultAmazonLexModelBuildingV2ExportsApiEnvironment3Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2ExportsApiEnvironment3Config
    )
    environment4: DefaultAmazonLexModelBuildingV2ExportsApiEnvironment4Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2ExportsApiEnvironment4Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url, path=path, variables=[param[str]("region", production.region)]
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url, path=path, variables=[param[str]("region", environment2.region)]
            )
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(
                base_url=environment3.base_url, path=path, variables=[param[str]("region", environment3.region)]
            )
        environment4 = self.environment4
        return UrlTemplate(
            base_url=environment4.base_url, path=path, variables=[param[str]("region", environment4.region)]
        )


class DefaultAmazonLexModelBuildingV2ExportsApiConfigDict(TypedDict):
    production: NotRequired[DefaultAmazonLexModelBuildingV2ExportsApiProductionConfigDict]
    environment2: NotRequired[DefaultAmazonLexModelBuildingV2ExportsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultAmazonLexModelBuildingV2ExportsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultAmazonLexModelBuildingV2ExportsApiEnvironment4ConfigDict]


class DefaultAmazonLexModelBuildingV2OperationsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2OperationsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2OperationsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://runtime.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2OperationsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2OperationsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2OperationsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2OperationsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2OperationsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2OperationsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultAmazonLexModelBuildingV2OperationsApiProductionConfig = Field(
        default_factory=DefaultAmazonLexModelBuildingV2OperationsApiProductionConfig
    )
    environment2: DefaultAmazonLexModelBuildingV2OperationsApiEnvironment2Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2OperationsApiEnvironment2Config
    )
    environment3: DefaultAmazonLexModelBuildingV2OperationsApiEnvironment3Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2OperationsApiEnvironment3Config
    )
    environment4: DefaultAmazonLexModelBuildingV2OperationsApiEnvironment4Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2OperationsApiEnvironment4Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url, path=path, variables=[param[str]("region", production.region)]
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url, path=path, variables=[param[str]("region", environment2.region)]
            )
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(
                base_url=environment3.base_url, path=path, variables=[param[str]("region", environment3.region)]
            )
        environment4 = self.environment4
        return UrlTemplate(
            base_url=environment4.base_url, path=path, variables=[param[str]("region", environment4.region)]
        )


class DefaultAmazonLexModelBuildingV2OperationsApiConfigDict(TypedDict):
    production: NotRequired[DefaultAmazonLexModelBuildingV2OperationsApiProductionConfigDict]
    environment2: NotRequired[DefaultAmazonLexModelBuildingV2OperationsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultAmazonLexModelBuildingV2OperationsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultAmazonLexModelBuildingV2OperationsApiEnvironment4ConfigDict]


class DefaultAmazonLexModelBuildingV2TagsApiProductionConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models-v2-lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2TagsApiProductionConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2TagsApiEnvironment2Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models.lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2TagsApiEnvironment2ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2TagsApiEnvironment3Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models-v2-lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2TagsApiEnvironment3ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2TagsApiEnvironment4Config(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://models-v2-lex.{region}.amazonaws.com"
    region: str = "us-east-1"


class DefaultAmazonLexModelBuildingV2TagsApiEnvironment4ConfigDict(TypedDict):
    base_url: NotRequired[str]
    region: NotRequired[str]


class DefaultAmazonLexModelBuildingV2TagsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    production: DefaultAmazonLexModelBuildingV2TagsApiProductionConfig = Field(
        default_factory=DefaultAmazonLexModelBuildingV2TagsApiProductionConfig
    )
    environment2: DefaultAmazonLexModelBuildingV2TagsApiEnvironment2Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2TagsApiEnvironment2Config
    )
    environment3: DefaultAmazonLexModelBuildingV2TagsApiEnvironment3Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2TagsApiEnvironment3Config
    )
    environment4: DefaultAmazonLexModelBuildingV2TagsApiEnvironment4Config = Field(
        default_factory=DefaultAmazonLexModelBuildingV2TagsApiEnvironment4Config
    )

    def resolve(self, environment: Environment, path: str) -> UrlTemplate:
        if environment == "production":
            production = self.production
            return UrlTemplate(
                base_url=production.base_url, path=path, variables=[param[str]("region", production.region)]
            )
        if environment == "environment2":
            environment2 = self.environment2
            return UrlTemplate(
                base_url=environment2.base_url, path=path, variables=[param[str]("region", environment2.region)]
            )
        if environment == "environment3":
            environment3 = self.environment3
            return UrlTemplate(
                base_url=environment3.base_url, path=path, variables=[param[str]("region", environment3.region)]
            )
        environment4 = self.environment4
        return UrlTemplate(
            base_url=environment4.base_url, path=path, variables=[param[str]("region", environment4.region)]
        )


class DefaultAmazonLexModelBuildingV2TagsApiConfigDict(TypedDict):
    production: NotRequired[DefaultAmazonLexModelBuildingV2TagsApiProductionConfigDict]
    environment2: NotRequired[DefaultAmazonLexModelBuildingV2TagsApiEnvironment2ConfigDict]
    environment3: NotRequired[DefaultAmazonLexModelBuildingV2TagsApiEnvironment3ConfigDict]
    environment4: NotRequired[DefaultAmazonLexModelBuildingV2TagsApiEnvironment4ConfigDict]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_amazon_lex_model_building_v2_bots_api: DefaultAmazonLexModelBuildingV2BotsApiConfig = Field(
        default_factory=DefaultAmazonLexModelBuildingV2BotsApiConfig
    )
    default_amazon_lex_model_building_v2_builtins_api: DefaultAmazonLexModelBuildingV2BuiltinsApiConfig = Field(
        default_factory=DefaultAmazonLexModelBuildingV2BuiltinsApiConfig
    )
    default_amazon_lex_model_building_v2_exports_api: DefaultAmazonLexModelBuildingV2ExportsApiConfig = Field(
        default_factory=DefaultAmazonLexModelBuildingV2ExportsApiConfig
    )
    default_amazon_lex_model_building_v2_operations_api: DefaultAmazonLexModelBuildingV2OperationsApiConfig = Field(
        default_factory=DefaultAmazonLexModelBuildingV2OperationsApiConfig
    )
    default_amazon_lex_model_building_v2_tags_api: DefaultAmazonLexModelBuildingV2TagsApiConfig = Field(
        default_factory=DefaultAmazonLexModelBuildingV2TagsApiConfig
    )

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_amazon_lex_model_building_v2_bots_api: NotRequired[DefaultAmazonLexModelBuildingV2BotsApiConfigDict]
    default_amazon_lex_model_building_v2_builtins_api: NotRequired[DefaultAmazonLexModelBuildingV2BuiltinsApiConfigDict]
    default_amazon_lex_model_building_v2_exports_api: NotRequired[DefaultAmazonLexModelBuildingV2ExportsApiConfigDict]
    default_amazon_lex_model_building_v2_operations_api: NotRequired[
        DefaultAmazonLexModelBuildingV2OperationsApiConfigDict
    ]
    default_amazon_lex_model_building_v2_tags_api: NotRequired[DefaultAmazonLexModelBuildingV2TagsApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
