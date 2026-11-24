from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    MALFORMED = "malformed"
    BAD_SIGNATURE = "bad_signature"
    WRONG_ISSUER = "wrong_issuer"
    EXPIRED = "expired"
    WRONG_ACTION = "wrong_action"
    INPUT_MISMATCH = "input_mismatch"
    DESTINATION_MISMATCH = "destination_mismatch"
    ARTIFACT_MISMATCH = "artifact_mismatch"
    WRONG_ORGANISATION = "wrong_organisation"
    UNSIGNED_DEPLOYMENT = "unsigned_deployment"
    AGENTS_STOPPED = "agents_stopped"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
