from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Record1(SdkBaseModel):
    fields: Any
    """A mapping of field names (or field IDs when returnFieldsByFieldId is true) to their cell values. The structure
    depends on the field types defined in the table schema."""


class Record1Dict(TypedDict):
    fields: Any
