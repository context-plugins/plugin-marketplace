from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .cover import Cover, CoverDict
from .enums.currency import CurrencyOrStr
from .enums.type import TypeOrStr
from .unions.setting import Setting, SettingDict


class UpdateCampaignRequest(SdkBaseModel):
    published: Optional[bool] = UNSET
    public: Optional[bool] = UNSET
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    title: Optional[str] = UNSET
    subtitle: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    goal: OptionalNullable[int] = UNSET
    end_at: OptionalNullable[RFC3339DateTime] = UNSET
    short_code: OptionalNullable[str] = UNSET
    slug: Optional[str] = UNSET
    beneficiary_id: OptionalNullable[int] = UNSET
    timezone: OptionalNullable[str] = UNSET
    currency: Optional[CurrencyOrStr] = UNSET
    default_appeal_id: OptionalNullable[int] = UNSET
    cover: Optional[Cover] = UNSET
    settings: OptionalNullable[list[Setting]] = UNSET


class UpdateCampaignRequestDict(TypedDict):
    published: NotRequired[bool]
    public: NotRequired[bool]
    type_: NotRequired[TypeOrStr]
    title: NotRequired[str]
    subtitle: NotRequired[str | None]
    description: NotRequired[str | None]
    goal: NotRequired[int | None]
    end_at: NotRequired[RFC3339DateTime | None]
    short_code: NotRequired[str | None]
    slug: NotRequired[str]
    beneficiary_id: NotRequired[int | None]
    timezone: NotRequired[str | None]
    currency: NotRequired[CurrencyOrStr]
    default_appeal_id: NotRequired[int | None]
    cover: NotRequired[CoverDict]
    settings: NotRequired[list[SettingDict] | None]
