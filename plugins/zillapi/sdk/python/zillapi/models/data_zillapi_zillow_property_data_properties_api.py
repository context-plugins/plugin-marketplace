from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DataZillapiZillowPropertyDataPropertiesApi(SdkBaseModel):
    agent_name: OptionalNullable[str] = Field(default=UNSET, alias="agentName")
    agent_email: OptionalNullable[str] = Field(default=UNSET, alias="agentEmail")
    agent_phone_number: OptionalNullable[str] = Field(default=UNSET, alias="agentPhoneNumber")
    agent_license_number: OptionalNullable[str] = Field(default=UNSET, alias="agentLicenseNumber")
    broker_name: OptionalNullable[str] = Field(default=UNSET, alias="brokerName")
    broker_phone_number: OptionalNullable[str] = Field(default=UNSET, alias="brokerPhoneNumber")
    attribution_info: OptionalNullable[Any] = Field(default=UNSET, alias="attributionInfo")


class DataZillapiZillowPropertyDataPropertiesApiDict(TypedDict):
    agent_name: NotRequired[str | None]
    agent_email: NotRequired[str | None]
    agent_phone_number: NotRequired[str | None]
    agent_license_number: NotRequired[str | None]
    broker_name: NotRequired[str | None]
    broker_phone_number: NotRequired[str | None]
    attribution_info: NotRequired[Any | None]
