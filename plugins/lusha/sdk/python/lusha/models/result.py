from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkTypedExtrasModel
from .linkedin_activity_intent_item import LinkedinActivityIntentItem, LinkedinActivityIntentItemDict


class Result(SdkTypedExtrasModel):
    id: Optional[str] = UNSET
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    domain: Optional[str] = UNSET
    linkedin_activity_intent: Optional[list[LinkedinActivityIntentItem]] = Field(
        default=UNSET, alias="linkedinActivityIntent"
    )
    __pydantic_extra__: dict[str, list[Any]] = Field(init=False)


class ResultDict(TypedDict, extra_items=list[Any]):  # type: ignore[call-arg, unused-ignore]
    id: NotRequired[str]
    company_name: NotRequired[str]
    domain: NotRequired[str]
    linkedin_activity_intent: NotRequired[list[LinkedinActivityIntentItemDict]]
