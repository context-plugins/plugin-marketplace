from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .handler_config import HandlerConfig, HandlerConfigDict


class HandlerConfigs(SdkBaseModel):
    on_publish: Optional[HandlerConfig] = Field(default=UNSET, alias="onPublish")
    on_subscribe: Optional[HandlerConfig] = Field(default=UNSET, alias="onSubscribe")


class HandlerConfigsDict(TypedDict):
    on_publish: NotRequired[HandlerConfigDict]
    on_subscribe: NotRequired[HandlerConfigDict]
