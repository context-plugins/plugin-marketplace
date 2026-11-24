from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_doi_t_widgets_beta_api import TypeDoiTWidgetsBetaApiOrStr


class WidgetItem(SdkBaseModel):
    """Catalogue entry for one widget, without its computed result."""

    id: str
    """Customer- and tier-specific widget id. This value is accepted by getWidget and can vary between customers."""

    alias: str
    """Stable customer-facing widget identifier. This value is also accepted by getWidget."""

    name: str
    """Human-readable widget name."""

    description: str
    """What the widget value represents."""

    type_: TypeDoiTWidgetsBetaApiOrStr = Field(alias="type")
    """Whether the widget is supplied by DoiT or defined by a customer."""

    kind: Literal["monetary_metric"] = "monetary_metric"
    """Determines which property is populated in the widget's ``result``."""


class WidgetItemDict(TypedDict):
    id: str
    alias: str
    name: str
    description: str
    type_: TypeDoiTWidgetsBetaApiOrStr
    kind: Literal["monetary_metric"]
