from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.env import EnvOrStr


class Key(SdkBaseModel):
    env: EnvOrStr
    """Key environment: live or sandbox (stay_test_)."""


class KeyDict(TypedDict):
    env: EnvOrStr
