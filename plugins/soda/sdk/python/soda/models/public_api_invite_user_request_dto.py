from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiInviteUserRequestDto(SdkBaseModel):
    emails: list[str]


class PublicApiInviteUserRequestDtoDict(TypedDict):
    emails: list[str]
