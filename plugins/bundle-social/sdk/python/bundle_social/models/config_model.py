from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.item42 import Item42, Item42Dict


class ConfigModel(SdkBaseModel):
    get_started_payload: Optional[str] = Field(default=UNSET, alias="getStartedPayload")
    composer_input_disabled: Optional[bool] = Field(default=UNSET, alias="composerInputDisabled")
    items: Optional[list[Item42]] = UNSET


class ConfigModelDict(TypedDict):
    get_started_payload: NotRequired[str]
    composer_input_disabled: NotRequired[bool]
    items: NotRequired[list[Item42Dict]]
