from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValueInfo(SdkBaseModel):
    """Annotatated property value."""

    value: Optional[str] = UNSET
    """Property value."""

    annotation: Optional[str] = UNSET
    """Annotation, comment or explanation why the property was set."""

    overridden_value: Optional[str] = Field(default=UNSET, alias="overriddenValue")
    """Optional. Value which was replaced by the corresponding component."""


class ValueInfoDict(TypedDict):
    value: NotRequired[str]
    annotation: NotRequired[str]
    overridden_value: NotRequired[str]
