from __future__ import annotations

from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UrlTemplate, param


class DefaultConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://api.boomi.com/api/rest/v1/{accountId}"
    account_id: str = "your-account-id"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path, variables=[param[str]("accountId", self.account_id)])


class DefaultConfigDict(TypedDict):
    base_url: NotRequired[str]
    account_id: NotRequired[str]


class DefaultBoomiDataHubGoldenRecordsApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://mdh.boomi.com/mdh"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(base_url=self.base_url, path=path)


class DefaultBoomiDataHubGoldenRecordsApiConfigDict(TypedDict):
    base_url: NotRequired[str]


class DefaultBoomiEventStreamsRestMessagesApiConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    base_url: str = "https://{topicEndpoint}"
    topic_endpoint: str = "your-topic-endpoint.boomi.com"

    def resolve(self, path: str) -> UrlTemplate:
        return UrlTemplate(
            base_url=self.base_url, path=path, variables=[param[str]("topicEndpoint", self.topic_endpoint)]
        )


class DefaultBoomiEventStreamsRestMessagesApiConfigDict(TypedDict):
    base_url: NotRequired[str]
    topic_endpoint: NotRequired[str]


class ServerConfig(BaseModel):
    model_config = ConfigDict(frozen=True, extra="forbid")
    default: DefaultConfig = Field(default_factory=DefaultConfig)
    default_boomi_data_hub_golden_records_api: DefaultBoomiDataHubGoldenRecordsApiConfig = Field(
        default_factory=DefaultBoomiDataHubGoldenRecordsApiConfig
    )
    default_boomi_event_streams_rest_messages_api: DefaultBoomiEventStreamsRestMessagesApiConfig = Field(
        default_factory=DefaultBoomiEventStreamsRestMessagesApiConfig
    )

    @classmethod
    def coerce(cls, value: ServerConfigOrDict | None) -> ServerConfig:
        if isinstance(value, cls):
            return value
        return cls.model_validate(value if value is not None else {})


class ServerConfigDict(TypedDict):
    default: NotRequired[DefaultConfigDict]
    default_boomi_data_hub_golden_records_api: NotRequired[DefaultBoomiDataHubGoldenRecordsApiConfigDict]
    default_boomi_event_streams_rest_messages_api: NotRequired[DefaultBoomiEventStreamsRestMessagesApiConfigDict]


ServerConfigOrDict: TypeAlias = ServerConfig | ServerConfigDict
