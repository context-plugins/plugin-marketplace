from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.currency import CurrencyOrStr
from .enums.type import TypeOrStr
from .unions.setting import Setting, SettingDict


class StoreCampaignRequest(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    title: str
    subtitle: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    goal: OptionalNullable[int] = UNSET
    end_at: OptionalNullable[RFC3339DateTime] = UNSET
    slug: Optional[str] = UNSET
    beneficiary_id: OptionalNullable[int] = UNSET
    timezone: OptionalNullable[str] = UNSET
    currency: Optional[CurrencyOrStr] = UNSET
    settings: OptionalNullable[list[Setting]] = UNSET


class StoreCampaignRequestDict(TypedDict):
    type_: TypeOrStr
    title: str
    subtitle: NotRequired[str | None]
    description: NotRequired[str | None]
    goal: NotRequired[int | None]
    end_at: NotRequired[RFC3339DateTime | None]
    slug: NotRequired[str]
    beneficiary_id: NotRequired[int | None]
    timezone: NotRequired[str | None]
    currency: NotRequired[CurrencyOrStr]
    settings: NotRequired[list[SettingDict] | None]
