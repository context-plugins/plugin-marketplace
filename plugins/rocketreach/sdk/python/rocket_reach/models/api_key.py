from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiKey(SdkBaseModel):
    api_key: Optional[str] = UNSET
    """The API key for your account. You can also find your API key `here
    <https://rocketreach.co/account?section=nav_gen_api>`__."""


class ApiKeyDict(TypedDict):
    api_key: NotRequired[str]
