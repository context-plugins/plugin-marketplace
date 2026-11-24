from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .public_api_notification_rule_dto import PublicApiNotificationRuleDto, PublicApiNotificationRuleDtoDict


class PublicApiListNotificationRulesResponse(SdkBaseModel):
    content: list[PublicApiNotificationRuleDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListNotificationRulesResponseDict(TypedDict):
    content: list[PublicApiNotificationRuleDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
