from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InputFormat2(str, Enum):
    """Specifies how the text in an input file should be processed: ONE_DOC_PER_FILE - Each file is considered a
    separate document. Use this option when you are processing large documents, such as newspaper articles or scientific
    papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are
    processing many short documents, such as text messages."""

    ONE_DOC_PER_FILE = "ONE_DOC_PER_FILE"
    ONE_DOC_PER_LINE = "ONE_DOC_PER_LINE"

    __str__ = str.__str__


InputFormat2OrStr: TypeAlias = Annotated[InputFormat2 | str, open_enum_validator(InputFormat2)]
