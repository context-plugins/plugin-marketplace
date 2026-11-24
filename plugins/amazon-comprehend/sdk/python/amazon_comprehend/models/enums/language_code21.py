from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode21(str, Enum):
    """The language code of the input documents. You can specify any of the following languages supported by Amazon
    Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt")."""

    EN = "en"
    ES = "es"
    FR = "fr"
    DE = "de"
    IT = "it"
    PT = "pt"

    __str__ = str.__str__


LanguageCode21OrStr: TypeAlias = Annotated[LanguageCode21 | str, open_enum_validator(LanguageCode21)]
