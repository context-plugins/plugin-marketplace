from __future__ import annotations

from typing import TypeAlias

from ..form_field_skribble_signature_api import FormFieldSkribbleSignatureApi, FormFieldSkribbleSignatureApiDict
from ..multiple_positions import MultiplePositions, MultiplePositionsDict

VisualSignatureV3: TypeAlias = MultiplePositions | FormFieldSkribbleSignatureApi
"""Visual signature placement information."""

VisualSignatureV3Dict: TypeAlias = MultiplePositionsDict | FormFieldSkribbleSignatureApiDict
