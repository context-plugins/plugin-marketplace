from __future__ import annotations

from typing import TypeAlias

from ..field_model import FieldModel, FieldModelDict

Field1: TypeAlias = str | FieldModel

Field1Dict: TypeAlias = str | FieldModelDict
