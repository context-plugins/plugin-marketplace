from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SignatureLegislation(str, Enum):
    """Legislation under which the signatures are created. Required when ``quality`` is ``QES`` or ``AES_MINIMAL``.

    | Legislation | Description |
    | --- | --- |
    | **ZERTES** | QES according to Swiss law. This is the **default**. |
    | **EIDAS** | QES according to EU law. |"""

    ZERTES = "ZERTES"
    EIDAS = "EIDAS"

    __str__ = str.__str__


SignatureLegislationOrStr: TypeAlias = Annotated[SignatureLegislation | str, open_enum_validator(SignatureLegislation)]
