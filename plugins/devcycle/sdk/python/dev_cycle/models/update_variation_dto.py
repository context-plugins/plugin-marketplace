from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.variables import Variables, VariablesDict


class UpdateVariationDto(SdkBaseModel):
    key: str
    """Unique key by Feature, can be used in the SDK / API to reference by 'key' rather than _id. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    name: str
    """Variation display name."""

    variables: Optional[dict[str, Variables]] = UNSET
    """A key-value map of variables to their value for this variation"""

    id: Optional[str] = Field(default=UNSET, alias="_id")


class UpdateVariationDtoDict(TypedDict):
    key: str
    name: str
    variables: NotRequired[dict[str, VariablesDict]]
    id: NotRequired[str]
