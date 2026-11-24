from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EnrichmentStatus(str, Enum):
    NOT_ENRICHED = "Not Enriched"
    COMPANY_ENRICHED = "Company Enriched"
    PERSON_ENRICHED = "Person Enriched"
    PERSON_COMPANY_ENRICHED = "Person & Company Enriched"

    __str__ = str.__str__


EnrichmentStatusOrStr: TypeAlias = Annotated[EnrichmentStatus | str, open_enum_validator(EnrichmentStatus)]
