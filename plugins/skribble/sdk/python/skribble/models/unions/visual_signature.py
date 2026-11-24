from __future__ import annotations

from typing import TypeAlias

from ..form_field import FormField, FormFieldDict
from ..multiple_positions import MultiplePositions, MultiplePositionsDict
from ..single_position import SinglePosition, SinglePositionDict

VisualSignature: TypeAlias = SinglePosition | MultiplePositions | FormField
"""Visual signature placement information."""

VisualSignatureDict: TypeAlias = SinglePositionDict | MultiplePositionsDict | FormFieldDict
