from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .artifact1 import Artifact1, Artifact1Dict
from .destination1 import Destination1, Destination1Dict
from .enums.classification1 import Classification1OrStr
from .enums.recipient_scope import RecipientScopeOrStr
from .enums.risk import RiskOrStr


class Scope(SdkBaseModel):
    destination: Destination1 | None
    recipient_scope: RecipientScopeOrStr | None = Field(alias="recipientScope")
    classification: Classification1OrStr | None
    risk: RiskOrStr | None
    artifact: Artifact1 | None
    digest: str | None


class ScopeDict(TypedDict):
    destination: Destination1Dict | None
    recipient_scope: RecipientScopeOrStr | None
    classification: Classification1OrStr | None
    risk: RiskOrStr | None
    artifact: Artifact1Dict | None
    digest: str | None
