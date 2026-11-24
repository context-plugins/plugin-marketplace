from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filters import Filters, FiltersDict


class Options(SdkBaseModel):
    filters: Optional[Filters] = UNSET
    """Filters to narrow down which changes trigger the webhook."""


class OptionsDict(TypedDict):
    filters: NotRequired[FiltersDict]
