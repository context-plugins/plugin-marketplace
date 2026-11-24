using System;

namespace NordicFinancialNews.Core.Exceptions;

public class SdkConnectionException(string message, Exception? innerException = null)
    : SdkException(message, innerException);
