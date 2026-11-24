from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr


class ResolutionNote(SdkBaseModel):
    """Optional reason and comment captured on a resolve transition."""

    reason: Optional[ReasonOrStr] = UNSET
    """Feedback reason; must belong to the given ``resolution``. ``ANOMALY_CONFIRMED`` accepts ``SECURITY_BREACH``,
    ``MISCONFIGURATION``, ``UNINTENTIONAL_PROVISIONING``, ``EXPECTED_COST_SPIKE``, ``ANOMALOUS_OTHER``; ``NOT_ANOMALY``
    accepts ``FAULTY_ANOMALY_DETECTION_MODEL``, ``INCORRECT_DATA``, ``LOW_IMPACT``, ``NON_ANOMALOUS_OTHER``."""

    comment: Optional[str] = UNSET
    """Free-text resolution comment; stored as the tagged resolution comment on the anomaly feed. Length-capped like
    console comments."""


class ResolutionNoteDict(TypedDict):
    reason: NotRequired[ReasonOrStr]
    comment: NotRequired[str]
